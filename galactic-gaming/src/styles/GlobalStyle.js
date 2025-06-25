import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto:wght@300;400;700&display=swap');

  :root {
    --primary-glow: #00faff;
    --secondary-glow: #f500ff;
    --bg-primary: #020418;
    --bg-secondary: #121636;
    --surface-color: rgba(18, 22, 54, 0.5);
    --text-primary: #e0e0e0;
    --text-secondary: #a0a0c0;
    --border-color: rgba(0, 250, 255, 0.2);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: 'Roboto', sans-serif; /* A more readable font for body text */
    overflow-x: hidden;
  }

  /* Custom Glassmorphism Effect */
  .glass-effect {
    background: var(--surface-color);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--border-color);
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--bg-primary);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--primary-glow);
    border-radius: 10px;
    box-shadow: 0 0 10px var(--primary-glow);
  }

  h1, h2, h3 {
    font-family: 'Orbitron', sans-serif;
    color: var(--primary-glow);
    text-shadow: 0 0 5px var(--primary-glow);
  }
`;