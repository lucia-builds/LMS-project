import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/tailwind.css'; // Ensure this path points to your CSS folder!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);