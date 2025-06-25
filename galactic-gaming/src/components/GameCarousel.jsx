import React from 'react';
import styled from 'styled-components';
import GameCard from './GameCard';
import { motion } from 'framer-motion';

const CarouselContainer = styled(motion.div)`
  margin-bottom: 3rem;
`;

const CarouselTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
`;

const ScrollableRow = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding: 1rem;
  &::-webkit-scrollbar { display: none; }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

// This component is now guaranteed to receive and pass down onGameHover.
const GameCarousel = ({ title, games, onGameHover }) => {
  return (
    <CarouselContainer>
      <CarouselTitle>{title}</CarouselTitle>
      <ScrollableRow>
        {games.map(game => (
          <GameCard 
            key={game.id} 
            game={game} 
            onGameHover={onGameHover} // Crucial: onGameHover is passed down to each card.
          />
        ))}
      </ScrollableRow>
    </CarouselContainer>
  );
};

export default GameCarousel;