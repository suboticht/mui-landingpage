import * as React from 'react';
import { createRoot } from 'react-dom/client';
import LandingPage from './LandingPage';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <LandingPage />
    ,
  </React.StrictMode>,
);