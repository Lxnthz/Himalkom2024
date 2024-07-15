import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react'; // Import StrictMode if needed
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
