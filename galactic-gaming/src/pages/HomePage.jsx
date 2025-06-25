import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getGames } from '../api/freetogame';
import { mockGames } from '../api/mockData';

// We need to import Canvas here
import { Canvas } from '@react-three/fiber'; 
import HologramModel from '../components/HologramModel';
import GameCard from '../components/GameCard';

// --- Styled Components (No changes here) ---
const PageWrapper = styled(motion.div)``;
const HeroSection = styled.div`
  height: 60vh;
  min-height: 500px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 3rem;
  background: url('https://cdn.artstation.com/p/assets/images/images/029/680/125/large/ed-barons-final-render-2-2.jpg') no-repeat center center/cover;
`;
const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(2, 4, 24, 0.9) 30%, rgba(2, 4, 24, 0) 100%);
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: 50%;
`;
const HeroTitle = styled.h1`
  font-size: 5rem;
`;
const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin-top: 1rem;
`;
const HologramContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
`;
const LibrarySection = styled.section`
  padding: 2rem 0;
  h2 { margin-bottom: 1.5rem; }
`;
const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow filters to wrap on smaller screens */
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 8px;
`;
const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid var(--border-color);
  background: ${({ active }) => (active ? 'var(--primary-glow)' : 'var(--surface-color)')};
  color: ${({ active }) => (active ? 'var(--bg-primary)' : 'var(--text-secondary)')};
  font-family: 'Orbitron', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    border-color: var(--primary-glow);
    color: var(--text-primary);
  }
`;
const GameGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
`;
const StatusText = styled.p`
  text-align: center; font-size: 1.5rem; padding: 5rem; color: var(--primary-glow);
`;

const HomePage = () => {
  const [allGames, setAllGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  const genres = ['All', 'Shooter', 'MMORPG', 'ARPG', 'Strategy', 'Card Game', 'Fighting', 'MOBA', 'Sports'];

  useEffect(() => {
    const fetchAllGames = async () => {
      try {
        setLoading(true);
        const response = await getGames();
        setAllGames(response.data);
        setFilteredGames(response.data);
      } catch (error) {
        console.error("Failed to fetch live game data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllGames();
  }, []);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredGames(allGames);
    } else {
      const filtered = allGames.filter(game => game.genre === activeFilter);
      setFilteredGames(filtered);
    }
  }, [activeFilter, allGames]);

  const hallOfFameGames = useMemo(() => mockGames.filter(g => g.source === 'steam'), []);

  return (
    <PageWrapper>
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>Galactic Gaming</HeroTitle>
          <HeroSubtitle>Your definitive gateway to the universe of gaming. Explore real-time data on hundreds of titles.</HeroSubtitle>
        </HeroContent>
        <HologramContainer>
          {/* --- THE FIX: Wrap HologramModel in a Canvas --- */}
          <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <HologramModel />
          </Canvas>
        </HologramContainer>
      </HeroSection>
      
      <LibrarySection>
        <h2>Game Library</h2>
        <FilterBar className="glass-effect">
          {genres.map(genre => (
            <FilterButton 
              key={genre} 
              active={activeFilter === genre} 
              onClick={() => setActiveFilter(genre)}
            >
              {genre}
            </FilterButton>
          ))}
        </FilterBar>

        {loading ? (
          <StatusText>Accessing Gaming Network...</StatusText>
        ) : (
          <GameGrid>
            {filteredGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </GameGrid>
        )}
      </LibrarySection>
      
      <LibrarySection>
        <h2>Hall of Fame (Premium Titles)</h2>
         <GameGrid>
            {hallOfFameGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </GameGrid>
      </LibrarySection>
    </PageWrapper>
  );
};

export default HomePage;