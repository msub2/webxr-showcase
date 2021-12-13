WL.registerComponent('controller', {
  player: { type: WL.Type.Object },
  head: { type: WL.Type.Object },
  fly: { type: WL.Type.Bool, default: false },
  speed: { type: WL.Type.Float, default: 1.0 }
}, {
  init: function() {
    this.controller = null;
  },
  start: function() {
    WL.onXRSessionStart.push(() => {
      WL.xrSession.addEventListener('inputsourceschange', e => {
        e.session.inputSources.forEach(source => {
          if (source.handedness === 'left') this.controller = source;
        });
      });
    });
  },
  update: function(dt) {
    if (this.controller != null) {
      this.move(dt);
    }
  },
  move: function(dt) {
    const axes = this.controller.gamepad.axes;
    let direction = [axes[2], 0, axes[3]];

    glMatrix.vec3.normalize(direction, direction);
    glMatrix.vec3.scale(direction, direction, dt * this.speed);
    glMatrix.vec3.transformQuat(direction, direction, this.head.transformWorld);        
    if (!this.fly) direction[1] = 0;
    this.player.translate(direction);
  }
});