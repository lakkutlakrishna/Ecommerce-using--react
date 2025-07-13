import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/App.css';
import Social from './components/Social.jsx';

// Render the main App component into the #root container
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Render the Social component into the #portal-root container
const portalRoot = createRoot(document.getElementById('portal-root'));
portalRoot.render(<Social />);