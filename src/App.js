import React from 'react';
import Header from './components/headerbar/Header';
import Statement from './components/Statment';
import FooterBar from './components/Footer'
import GalaxyButton from './components/galaxybuttons/GalaxyButton';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./components/test";
import CreateAll from "./components/CreateAll.js";
import PlayAll from "./components/PlayAll";
import Community from "./components/Community";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path={["/", "/index"]}>
              <Statement />
              <GalaxyButton />
            </Route>
            <Route exact path="/create-all">
              <CreateAll />
            </Route>
            <Route exact path="/play-all">
              <Test />
            </Route>
            <Route exact path="/community">
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
