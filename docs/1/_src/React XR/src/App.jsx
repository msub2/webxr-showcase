import React from 'react';
import { Color } from 'three'
import { useThree } from '@react-three/fiber';
import { VRCanvas } from '@react-three/xr';

const Player = () => {
  const { camera } = useThree();
  camera.position.set(0, 1.6, 0);
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
    <Ground />
    <Sky />
  </VRCanvas>
);
