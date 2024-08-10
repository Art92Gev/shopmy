import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Create a root using createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app within the root
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
