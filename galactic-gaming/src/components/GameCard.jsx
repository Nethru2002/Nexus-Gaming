import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CardWrapper = styled(motion.div)`
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  border: 1px solid transparent;
  transition: all 0.4s ease;
  aspect-ratio: 2 / 3; /* Maintain a consistent card shape */

  &:hover {
    transform: scale(1.05);
    border-color: var(--primary-glow);
    box-shadow: 0 0 20px rgba(0, 250, 255, 0.5); /* Use primary glow for shadow */
  }
`;

// --- MISSING DEFINITIONS ARE NOW ADDED ---
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  
  ${CardWrapper}:hover & {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(2, 4, 24, 1) 20%, transparent);
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #fff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
  font-family: 'Roboto', sans-serif; /* Use the more readable font */
  font-weight: 700;
`;
// --- END OF ADDED DEFINITIONS ---

const GameCard = ({ game }) => {
  return (
    // The state prop ensures we pass the 'source' to the detail page
    <Link to={`/game/${game.id}`} state={{ source: game.source }} style={{ textDecoration: 'none' }}>
      <CardWrapper>
        <CardImage src={game.thumbnail} alt={game.title} />
        <CardContent>
          <CardTitle>{game.title}</CardTitle>
        </CardContent>
      </CardWrapper>
    </Link>
  );
};

export default GameCard;