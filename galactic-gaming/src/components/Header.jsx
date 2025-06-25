import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiGamepad } from 'react-icons/gi';

const HeaderContainer = styled.header`
  padding: 1rem 3rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`/* ... same as sidebar ... */`;
const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  a {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 700;
    transition: color 0.3s ease;
    &:hover { color: var(--primary-glow); }
  }
`;

const Header = () => {
  return (
    <HeaderContainer className="glass-effect">
      <Logo to="/">
        <GiGamepad size="2rem" />
        GALACTIC
      </Logo>
      <NavLinks>
        <Link to="/">Library</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/upcoming">Upcoming</Link>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;