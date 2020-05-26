import React from 'react';
import Header from './components/headerbar/Header';
import Statement from './components/Statment';
import FooterBar from './components/Footer'
import GalaxyButton from './components/galaxybuttons/GalaxyButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Statement />
        <GalaxyButton />
      </div>
      <FooterBar />
    </div >
  );
}

export default App;
