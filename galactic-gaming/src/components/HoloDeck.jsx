import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

const HoloObject = ({ hoveredGame }) => {
  const meshRef = useRef();
  const wireframeRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
      meshRef.current.rotation.x += delta * 0.05;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y += delta * 0.1;
      wireframeRef.current.rotation.x += delta * 0.05;
    }
  });

  const getHoloColor = (genre = '') => {
    if (genre.includes('RPG')) return '#f500ff'; // Pink for RPGs
    if (genre.includes('Shooter')) return '#ff4500'; // Orange for Shooters
    if (genre.includes('Adventure')) return '#00ff7f'; // Green for Adventure
    return '#00faff'; // Default Cyan
  };

  const color = getHoloColor(hoveredGame?.genre);
  
  return (
    <group>
      <Icosahedron ref={meshRef} args={[1, 0]}>
        <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={2} 
            transparent 
            opacity={0.3} 
            blending={THREE.AdditiveBlending}
        />
      </Icosahedron>
      <Icosahedron ref={wireframeRef} args={[1, 0]}>
        <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={3} 
            wireframe 
        />
      </Icosahedron>
    </group>
  );
};

const HoloDeck = ({ hoveredGame }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 5, 5]} />
      <Suspense fallback={null}>
        <HoloObject hoveredGame={hoveredGame} />
      </Suspense>
    </Canvas>
  );
};

export default HoloDeck;