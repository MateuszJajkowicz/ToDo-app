import React from 'react';
import { render } from 'preact';
import App from './App.tsx';
import './index.css';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
