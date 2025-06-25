import React from 'react';
import styled from 'styled-components';
import GameCard from './GameCard';
import { motion } from 'framer-motion';

const ListContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 5%;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const GameList = ({ games }) => {
  return (
    <ListContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </ListContainer>
  );
};

export default GameList;