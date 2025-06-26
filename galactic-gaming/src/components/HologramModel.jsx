import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const HologramModel = () => {
  const group = useRef();
  const { scene } = useGLTF('/models/hologram.glb');

  return (
    <primitive
      ref={group}
      object={scene}
      scale={5}
      position={[0, -1, 0]}
    />
  );
};

export default HologramModel;