import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header'; // Use the new Header

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  padding: 0 3rem 3rem 3rem;
`;

const Layout = () => {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </AppContainer>
  );
};

export default Layout;