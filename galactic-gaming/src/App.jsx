import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import ParticleBackground from './components/ParticleBackground';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GameDetailPage from './pages/GameDetailPage';
import TrendingPage from './pages/TrendingPage'; 
import UpcomingPage from './pages/UpcomingPage';  

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'game/:id', element: <GameDetailPage /> },
      { path: 'trending', element: <TrendingPage /> },
      { path: 'upcoming', element: <UpcomingPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <ParticleBackground />
      <RouterProvider router={router} />
    </>
  );
}

export default App;