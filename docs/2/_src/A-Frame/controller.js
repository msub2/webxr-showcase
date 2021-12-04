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
    this.head = document.querySelector('#head');
    var leftHand = document.querySelector('#leftHand');

    // Set up variables to store controller input data and three.js data
    this.moveX = 0;
    this.moveY = 0;
    this.moveVector = new THREE.Vector3();
    this.headRot = new THREE.Euler(0, 0, 0, 'YXZ'); // Y rotations will be applied first

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
      this.move(timeDelta / 1000);
  },
  move: function (dt) {
    // Get our initial move vector and normalize it
    this.moveVector.set(this.moveX, 0, this.moveY).normalize(); 
    // Store our head rotation into our Euler variable
    this.headRot.setFromQuaternion(head.object3D.quaternion);
    // If we don't want to fly, this zeroes out any movement that isn't side-to-side
    if (!this.data.fly) this.headRot.set(0, this.headRot.y, 0);
    // Scale our movement vector based on speed
    const scaledMovement = this.moveVector.multiplyScalar(this.data.speed * dt);
    // Adjust our vector based on where we're looking and then move the player
    player.object3D.position.add(scaledMovement.applyEuler(this.headRot));
  },
});
