AFRAME.registerComponent('smooth-locomotion', {
  schema: {
    speed: { type: 'float', default: 2 },
    active: { type: 'boolean', default: false },
    fly: { type: 'boolean', default: false },
  },
  init: function () {
    // Do nothing if this controller isn't meant to smooth locomote
    if (!this.data.active) return;

    // Get scene element references
    this.player = document.querySelector('#player');
    this.head = player.querySelector('#head');
    var leftHand = document.querySelector('#leftHand');

    // Set up variables to store controller input data
    this.moveX = 0;
    this.moveY = 0;

    // Hook up event listeners for the relevant movement input events.
    // Will try to read thumbstick input before trackpad input.
    leftHand.addEventListener('axismove', event => {
      this.moveX = event.detail.axis[2] != 0 ? event.detail.axis[2] : event.detail.axis[0];
      this.moveY = event.detail.axis[3] != 0 ? event.detail.axis[3] : event.detail.axis[1];
    });
  },
  tick: function (time, timeDelta) {
    // Do nothing if this controller isn't meant to smooth locomote
    if (!this.data.active) return;

    // If there's input coming in, move the player
    if (this.moveX + this.moveY != 0)
      this.move(this.moveX, this.moveY, timeDelta / 1000);
  },
  move: function (x, y, dt) {
    let direction = [x, 0, y]; // Initial move vector from the controller
    let headRot = head.object3D.quaternion.toArray(); // Head rotation as quaternion so glMatrix can read it

    // Rotate our input vector by our head rotation, then scale by delta time and speed
    glMatrix.vec3.transformQuat(direction, direction, headRot);
    glMatrix.vec3.scale(direction, direction, dt * this.data.speed);

    // Move player
    player.object3D.translateX(direction[0]);
    if (this.data.fly) player.object3D.translateY(direction[1]);
    player.object3D.translateZ(direction[2]);
  },
});
