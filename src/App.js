import React from 'react';
import './App.css';
import PostList from './PostList';
import Routes from './Routes';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
