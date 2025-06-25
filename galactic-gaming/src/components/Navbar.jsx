import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  padding: 1rem 5%;
  background: rgba(10, 10, 26, 0.5);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-shadow: 0 0 8px var(--primary-color);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  a {
    font-size: 1rem;
    font-weight: 400;
    color: var(--text-color);
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -5px;
      left: 0;
      background-color: var(--secondary-color);
      transition: width 0.3s ease;
    }

    &:hover:after {
      width: 100%;
    }
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Logo to="/">Galactic Gaming</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        {/* Add more links here for news, etc. later */}
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;