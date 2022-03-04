import * as RE from 'rogue-engine';
import { Prop, Runtime } from 'rogue-engine';
import { Vector3, Euler, Group, XRInputSource, Object3D } from 'three';

export default class Controller extends RE.Component {
  public static sources: Controller[] = [];

  @Prop("Select")
  private hand: string;

  @Prop("Object3D")
  private player: Object3D;

  @Prop("Boolean")
  private fly: boolean;

  @Prop("Number")
  private speed: number;

  private controller: Group;
  private grip: Group;

  private axes: Float32Array = new Float32Array(4);
  private buttons: GamepadButton[];
  private inputSource: XRInputSource;
  private moveVector: Vector3 = new Vector3();
  private headRot: Euler = new Euler();

  get handOptions() {
    return ['Left', 'Right'];
  }

  awake() {
    Controller.sources.push(this);

    const { renderer } = Runtime;
    const controllerId = this.hand === '1' ? 1 : 0;
    renderer.xr.getController(controllerId);
    renderer.xr.getControllerGrip(controllerId);
  }

  update() {
    if (!this.controller) {
      this.detectController();
    }
    else {
      this.axes = this.inputSource.gamepad.axes.slice();
      this.buttons = this.inputSource.gamepad.buttons.slice();
      this.move();
    }
    RE.Runtime.camera.updateWorldMatrix(true, true);
  }

  async detectController() {
    const { renderer } = Runtime;
    const session = renderer.xr.getSession();

    if (!session) {
      return;
    }

    const { inputSources } = session;
    if (!inputSources) {
      return;
    }

    const handedness = this.hand === '1' ? 'right' : 'left';
    let controllerId: number = -1;
    for (let id in inputSources) {
      if (inputSources[id].handedness === handedness) {
        controllerId = parseInt(id);
      }
    }

    if (controllerId === -1) {
      return;
    }

    this.inputSource = inputSources[controllerId];
    this.controller = renderer.xr.getController(controllerId);
    this.grip = renderer.xr.getControllerGrip(controllerId);
    this.object3d.parent?.add(this.grip);
    this.grip.add(this.object3d);
  }

  move() {
    const x = this.axes[2];
    const z = this.axes[3];
    const { camera } = Runtime;
    
    // Get our initial move vector and normalize it
    this.moveVector.set(x, 0, z).normalize(); 
    // Store our head rotation into our Euler variable
    this.headRot.setFromQuaternion(camera.quaternion);
    // If we don't want to fly, this zeroes out any movement that isn't side-to-side
    if (!this.fly) this.headRot.set(0, this.headRot.y, 0);
    // Scale our movement vector based on speed
    const scaledMovement = this.moveVector.multiplyScalar(this.speed);
    // Adjust our vector based on where we're looking and then move the player
    this.player.position.add(scaledMovement.applyEuler(this.headRot));

    this.player.updateMatrixWorld();
  }
}

RE.registerComponent(Controller);