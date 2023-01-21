import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { AppProvider } from './Components/Contexts/context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
