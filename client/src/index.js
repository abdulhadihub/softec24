import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CookiesProvider } from "react-cookie";
import { UserProvider } from 'auth/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CookiesProvider>
  </React.StrictMode>
);