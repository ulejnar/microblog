import React from 'react';
import './App.css';
import Routes from './Routes';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';

function App() {
  // console.log('Rendering App......');
  return (
    <BrowserRouter>
      <Navigation />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
