import * as THREE from 'three';

export default class Controls {
  constructor(renderer) {
    // Controller input will run through here
    this.input = {
      left: {
        buttons: [],
        axes: [],
      },
      right: {
        buttons: [],
        axes: [],
      },
    };

    this.renderer = renderer;

    // Connect up controllers and visualize with cubes
    const hand = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const handMaterial = new THREE.MeshBasicMaterial();

    this.controller1 = renderer.xr.getController(0);
    this.controller1.addEventListener('connected', e => {
      this.controller1.gamepad = e.data.gamepad;
    });
    this.controller1Grip = renderer.xr.getControllerGrip(0);
    this.controller1Grip.add(new THREE.Mesh(hand, handMaterial));

    this.controller2 = renderer.xr.getController(1);
    this.controller2.addEventListener('connected', e => {
      this.controller2.gamepad = e.data.gamepad;
    });
    this.controller2Grip = renderer.xr.getControllerGrip(1);
    this.controller2Grip.add(new THREE.Mesh(hand, handMaterial));
  }

  getInput() {
    const session = this.renderer.xr.getSession();

    if (session) {
      session.inputSources.forEach(source => {
        if (source.handedness === 'left') {
          this.input.left.buttons = source.gamepad.buttons.slice();
          this.input.left.axes = source.gamepad.axes.slice();
        } else if (source.handedness === 'right') {
          this.input.right.buttons = source.gamepad.buttons.slice();
          this.input.right.axes = source.gamepad.axes.slice();
        }
      });
    }
  }
}
