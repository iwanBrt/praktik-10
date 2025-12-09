import React from 'react';
import BasicCSS from './components/BasicCSS';
import CSSModules from './components/CSSModules';
import StyledComponents from './components/StyledComponents';
import TailwindCSS from './components/TailwindCSS';
import ConditionalStyling from './components/ConditionalStyling';
import MaterialUI from './components/MaterialUI';
import './App.css';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="app">
      <Typography variant="h5" component="h1" gutterBottom>
        Demo Berbagai Metode Styling di React
      </Typography>

      <div className="demo-section">
        <h2>1. Basic CSS</h2>
        <BasicCSS />
      </div>

      <div className="demo-section">
        <h2>2. CSS Modules</h2>
        <CSSModules />
      </div>

      <div className="demo-section">
        <h2>3. Styled Components</h2>
        <StyledComponents />
      </div>

      <div className="demo-section">
        <h2>4. Tailwind CSS</h2>
        <TailwindCSS />
      </div>

      <div className="demo-section">
        <h2>5. Conditional Styling</h2>
        <ConditionalStyling />
      </div>

      <div className="demo-section">
        <h2>6. Material UI</h2>
        <MaterialUI />
      </div>
    </div>
  );
}

export default App;