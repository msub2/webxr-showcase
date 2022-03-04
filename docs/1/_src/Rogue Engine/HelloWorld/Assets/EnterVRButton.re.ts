import * as RE from 'rogue-engine';
import { VRButton } from 'three/examples/jsm/webxr/VRButton';

export default class EnterVRButton extends RE.Component {
  awake() {
    const { renderer } = RE.Runtime;

    renderer.xr.enabled = true;
    const button = VRButton.createButton( renderer );

    document.body.appendChild(button);
  }
}

RE.registerComponent(EnterVRButton);
