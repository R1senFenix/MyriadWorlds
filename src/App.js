import React from 'react';
import Header from './components/headerbar/Header';
import Statement from './components/Statment';
import FooterBar from './components/Footer'
import GalaxyButton from './components/galaxybuttons/GalaxyButton';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./components/test"


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route path="/">
              <Statement />
              <GalaxyButton />
            </Route>
            <Route exact path="/create-all">
              <Test />
            </Route>
          </Switch>
        </div>
        <FooterBar />
      </div >
    </Router>
  );
}

export default App;
