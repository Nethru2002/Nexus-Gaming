import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getGameDetails as getFreeToGameDetails } from '../api/freetogame';
import { getSteamGameDetails } from '../api/steam';
import { mockGames } from '../api/mockData';
import RatingGauge from '../components/RatingGauge';

const DetailWrapper = styled(motion.div)``;

const StatusText = styled.p`
  text-align: center; font-size: 1.5rem; padding: 5rem; color: var(--primary-glow);
`;

const Header = styled(motion.div)`
  height: 60vh;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 3rem;
  border-radius: 12px;
  overflow: hidden;
  background: #000;
`;

const HeaderBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(2, 4, 24, 1) 15%, transparent 60%);
  }
`;

const HeaderContent = styled(motion.div)`
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 5rem;
  text-shadow: 0 4px 25px rgba(0,0,0,0.7);
`;

const PlayButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--primary-glow);
  color: var(--bg-primary);
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 1.5rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1.2fr;
  gap: 2rem;
  margin-top: 2rem;
`;

const LeftColumn = styled.div`
  h2 { margin: 2rem 0 1rem 0; }
  .description-text {
    line-height: 1.7;
    color: var(--text-secondary);
  }
`;

const RightColumn = styled.div`
  position: sticky;
  top: 2rem;
  height: fit-content;
`;

const InfoBox = styled(motion.div)`
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  h3 {
    margin-bottom: 1rem;
    color: var(--text-primary);
  }
  p {
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
    strong { color: var(--text-primary); }
  }
`;

const ScreenshotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const GameDetailPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const source = location.state?.source;
    const mockGame = mockGames.find(g => String(g.id) === String(id));

    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      window.scrollTo(0, 0);
      const fetchDetails = async () => {
        try {
          setLoading(true);
          let gameData;
          if (source === 'steam') {
            gameData = await getSteamGameDetails(id);
          } else {
            const response = await getFreeToGameDetails(id);
            gameData = { ...response.data, description: response.data.description };
          }
          setGame({ ...gameData, rating: mockGame?.rating });
        } catch (err) {
          console.error("Failed to fetch game details:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchDetails();
    }, [id, source, mockGame]);

    if (loading || !game) return <StatusText>Accessing Holo-Grid Archives...</StatusText>;

    return (
        <DetailWrapper variants={pageVariants} initial="hidden" animate="visible">
            <Header variants={itemVariants}>
                <HeaderBackground
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <img src={game.screenshots?.[2]?.image || game.screenshots?.[0]?.image || game.thumbnail} alt={`${game.title} background`} />
                </HeaderBackground>
                <HeaderContent variants={itemVariants}>
                    <Title>{game.title}</Title>
                    <PlayButton 
                        href={game.game_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px var(--primary-glow)" }}
                    >
                        {source === 'steam' ? 'View on Steam' : 'Play Now'}
                    </PlayButton>
                </HeaderContent>
            </Header>

            <ContentGrid>
                <LeftColumn>
                    <motion.div variants={itemVariants}>
                        <h2>About</h2>
                        <div className="description-text" dangerouslySetInnerHTML={{ __html: game.description }} />
                    </motion.div>

                    {game.screenshots && game.screenshots.length > 0 && (
                        <motion.div variants={itemVariants}>
                            <h2>Media Gallery</h2>
                            <ScreenshotsGrid>
                                {game.screenshots.map(ss => (
                                    <motion.img
                                        key={ss.id}
                                        src={ss.image}
                                        alt="Screenshot"
                                        whileHover={{ scale: 1.05, zIndex: 1 }}
                                        style={{ width: '100%', borderRadius: '8px' }}
                                    />
                                ))}
                            </ScreenshotsGrid>
                        </motion.div>
                    )}
                </LeftColumn>
                <RightColumn>
                    {game.rating && (
                        <InfoBox className="glass-effect" variants={itemVariants}>
                            <h3>Rating</h3>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <RatingGauge rating={game.rating} />
                            </div>
                        </InfoBox>
                    )}
                    <InfoBox className="glass-effect" variants={itemVariants}>
                        <h3>Details</h3>
                        <p><strong>Genre:</strong> {game.genre}</p>
                        <p><strong>Platform:</strong> {game.platform}</p>
                        <p><strong>Publisher:</strong> {game.publisher}</p>
                        <p><strong>Release:</strong> {game.release_date}</p>
                    </InfoBox>
                </RightColumn>
            </ContentGrid>
        </DetailWrapper>
    );
};

export default GameDetailPage;