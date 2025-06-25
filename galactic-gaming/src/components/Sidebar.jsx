import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GiGamepad } from 'react-icons/gi';
import { FaHome, FaFire, FaPlus } from 'react-icons/fa';

const SidebarContainer = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 250px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  border-right: 1px solid var(--border-color);
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--primary-glow);
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 4rem;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--surface-color);
    color: var(--text-primary);
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer className="glass-effect">
      <Logo to="/">
        <GiGamepad size="2rem" />
        GALACTIC
      </Logo>
      <nav>
        <NavItem to="/"><FaHome /> Home</NavItem>
        <NavItem to="/trending"><FaFire /> Trending</NavItem>
        <NavItem to="/upcoming"><FaPlus /> Upcoming</NavItem>
      </nav>
    </SidebarContainer>
  );
};

export default Sidebar;