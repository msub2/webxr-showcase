// Set up Canvas
const canvas = document.getElementById('renderCanvas');
canvas.style.width = '100%';
canvas.style.height = '100%';

// Set up objects to be assigned in createScene
let xrHelper = null;
let moveX = 0;
let moveY = 0;
let moveSpeed = 0.05;

const engine = new BABYLON.Engine(canvas, true);

const createScene = (async function () {
  // Scene setup and lighting
  scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3.Blue();

  var light = new BABYLON.DirectionalLight('DirectionalLight', new BABYLON.Vector3(0, -1, 0), scene);

  // Ground
  const groundMaterial = new BABYLON.StandardMaterial('groundMaterial', scene);
  groundMaterial.diffuseColor = new BABYLON.Color3.Green();

  const ground = BABYLON.MeshBuilder.CreateGround('ground', {
    width: 10,
    height: 10,
  });
  ground.material = groundMaterial;

  // XR experience options
  xrHelper = await scene.createDefaultXRExperienceAsync();
  xrHelper.teleportation.detach();
  xrHelper.pointerSelection.detach();

  // Begin hooking up controller logic
  // We need to wait for a controller to be added, then for the motioncontroller object
  // Which contains the components we need to access for input
  xrHelper.input.onControllerAddedObservable.add(inputSource => {
    inputSource.onMotionControllerInitObservable.add(controller => {
      if (controller.handedness == 'left') {
        const leftThumbstick = controller.getComponentOfType('thumbstick');
        leftThumbstick.onAxisValueChangedObservable.add(axes => {
          moveX = axes.x;
          moveY = axes.y;
        });
      }
    });
  });
})();

engine.runRenderLoop(() => {
  if (xrHelper != null) move();
  scene.render();
});

const move = function () {
  const matrix = new BABYLON.Matrix();
  const deviceRotationQuaternion = xrHelper.input.xrCamera.rotationQuaternion;
  BABYLON.Matrix.FromQuaternionToRef(deviceRotationQuaternion, matrix);

  const move = new BABYLON.Vector3(moveX * moveSpeed, 0, -moveY * moveSpeed);
  const addPos = BABYLON.Vector3.TransformCoordinates(move, matrix);
  addPos.y = 0;

  xrHelper.input.xrCamera.position = xrHelper.input.xrCamera.position.add(addPos);
};
