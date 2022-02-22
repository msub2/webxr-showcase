import React from 'react';
import { Color, Euler, Vector3 } from 'three'
import { useThree, useFrame } from '@react-three/fiber';
import { VRCanvas, DefaultXRControllers, useXR } from '@react-three/xr';

const Player = () => {
  const { player, controllers, isPresenting } = useXR();
  const camera = player.children[0];
  const speed = 4;
  const localVector3 = new Vector3();
  const localEuler = new Euler();

  camera.position.set(0, 1.6, 0);

  const move = (delta) => {
    let x, y;
    let headPos = new Vector3();

    if (isPresenting) {
      const leftController = controllers.find(controller => {
        return controller.inputSource.handedness === 'left';
      });

      if (leftController?.inputSource?.gamepad.axes.length > 0) {
        const gamepad = leftController.inputSource.gamepad;
        x = gamepad.axes[2] || gamepad.axes[0];
        y = gamepad.axes[3] || gamepad.axes[1];
      }
      else {
        x = 0;
        y = 0;
      }
    }
    else {
      return;  
    }
    
    headPos.copy(camera.position);

    localVector3.set(x, 0, y);
    const moveLength = localVector3.length();
    if (moveLength > 1) {
      localVector3.divideScalar(moveLength);
    }
    const headEuler = localEuler.setFromQuaternion(camera.quaternion, 'YXZ');
    localEuler.x = 0;
    localEuler.z = 0;
    player.position.add(localVector3.multiplyScalar(speed * delta).applyEuler(headEuler));
    
    camera.position.copy(headPos);
  }

  useFrame((state, delta) => {
    move(delta);
  });

  return null;
}

const Ground = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10, 1]} />
      <meshBasicMaterial color={'green'} />
    </mesh>
  )
}

const Sky = () => {
  const { scene } = useThree();
  scene.background = new Color('blue');
  return null;
}

export default () => (
  <VRCanvas>
    <Player />
    <DefaultXRControllers />
    <Ground />
    <Sky />
  </VRCanvas>
);
