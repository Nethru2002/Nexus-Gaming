import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GaugeWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const Svg = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
`;

const Circle = styled(motion.circle)`
  stroke-width: 10;
  fill: transparent;
`;

const CircleBackground = styled(Circle)`
  stroke: var(--surface-color);
`;

const CircleProgress = styled(Circle)`
  stroke-linecap: round;
  pathLength: 1;
`;

const GaugeText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--text-primary);
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
`;

const RatingGauge = ({ rating }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = rating / 100;

  const getRatingColor = (r) => {
    if (r > 75) return '#00faff'; // Cyan for great
    if (r > 50) return '#ffd700'; // Gold for good
    return '#f500ff'; // Pink for mixed/low
  };

  const color = getRatingColor(rating);

  return (
    <GaugeWrapper>
      <Svg viewBox="0 0 100 100">
        <CircleBackground cx="50" cy="50" r={radius} />
        <CircleProgress
          cx="50"
          cy="50"
          r={radius}
          stroke={color}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * (1 - progress) }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </Svg>
      <GaugeText>{rating}</GaugeText>
    </GaugeWrapper>
  );
};

export default RatingGauge;