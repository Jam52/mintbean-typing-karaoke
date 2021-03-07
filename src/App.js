import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GamePage from './Game Components/GamePage';
import LandingPage from './Game Components/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <h1>routes for game page and landing page</h1>
      </Switch>
    </Router>
  );
}

export default App;
