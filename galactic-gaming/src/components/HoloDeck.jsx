import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import HologramModel from './HologramModel';

const HoloDeck = ({ hoveredGame }) => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'radial-gradient(ellipse at center, #0a192f 0%, #000 100%)',
      borderRadius: '16px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 35 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 5, 10]} intensity={1.2} />
        <pointLight position={[0, 0, 10]} intensity={1.5} color="#00faff" />
        <Suspense fallback={null}>
          <HologramModel hoveredGame={hoveredGame} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HoloDeck;