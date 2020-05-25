import React from 'react';
import Header from './components/Header';
import Statement from './components/Statment';
import FooterBar from './components/Footer'
import GalaxyButton from './components/GalaxyButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Statement />
      <GalaxyButton />
      <FooterBar />
    </div >
  );
}

export default App;
