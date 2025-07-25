import { StrictMode } from 'react'; // Imports StrictMode for helpful development checks
import { createRoot } from 'react-dom/client'; // Imports createRoot for React 18+ concurrent mode rendering
import App from './App.tsx'; // Imports your main application component
import './index.css'; // Imports your global Tailwind CSS and custom styles

createRoot(document.getElementById('root')!).render( // Selects the root HTML element and renders your app
  <StrictMode>
    <App /> {/* Renders your App component */}
  </StrictMode>
);