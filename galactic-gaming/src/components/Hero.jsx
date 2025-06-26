import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { EffectComposer, Bloom, Scanline, Noise } from '@react-three/postprocessing';

import { HologramModel } from './HologramModel';

const HeroContainer = styled.div`
  height: 70vh;
  width: 100%;
  position: relative; /* Essential for child absolute positioning */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const TitleWrapper = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* The key to perfect centering */
  z-index: 10;
  text-align: center;
  pointer-events: none;
`;

const MainTitle = styled(motion.h1)`
  font-size: 5rem;
  margin-bottom: 0.5rem;
  letter-spacing: 5px;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--secondary-color);
  text-shadow: 0 0 5px var(--secondary-color);
`;

const titleContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const titleItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Hero = () => {
  return (
    <HeroContainer>
      <CanvasContainer>
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 5, 2]} intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00faff" />
          <pointLight position={[-10, -10, -10]} intensity={1.5} color="#f500ff" />

          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

          <Suspense fallback={null}>
            <HologramModel />
          </Suspense>

          <EffectComposer>
            <Bloom intensity={1.5} kernelSize={3} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
            <Scanline density={1.25} opacity={0.15} />
            <Noise opacity={0.03} />
          </EffectComposer>
        </Canvas>
      </CanvasContainer>

      <TitleWrapper variants={titleContainerVariants} initial="hidden" animate="visible">
        <MainTitle variants={titleItemVariants}>GALACTIC GAMING</MainTitle>
        <Subtitle variants={titleItemVariants}>Your Gateway to New Worlds</Subtitle>
      </TitleWrapper>
    </HeroContainer>
  );
};

export default Hero;