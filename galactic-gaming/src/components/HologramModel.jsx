import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function HologramModel(props) {
  const group = useRef();
  
  // Make sure your model is in /public/models/hologram.glb
  const { nodes, materials } = useGLTF('/models/hologram.glb');

  // This makes the model subtly track the mouse
  useFrame((state) => {
    if (group.current) {
      const { x, y } = state.mouse;
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.1, 0.05);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.1, 0.05);
    }
  });

  // Apply the hologram effect to all materials on load
  useEffect(() => {
    Object.values(materials).forEach(material => {
      material.transparent = true;
      material.opacity = 0.5;
      material.emissive = new THREE.Color("#00faff");
      material.emissiveIntensity = 1.5;
      material.blending = THREE.AdditiveBlending;
      material.needsUpdate = true;
    });
  }, [materials]);

  return (
    <group ref={group} {...props} dispose={null} scale={3.5} position={[0, -2.5, 0]}>
      {Object.values(nodes).map((node) => {
        if (node.isMesh) {
          return (
            <mesh
              key={node.uuid}
              geometry={node.geometry}
              material={node.material}
            />
          );
        }
        return null;
      })}
    </group>
  );
}

useGLTF.preload('/models/hologram.glb');
export default HologramModel;