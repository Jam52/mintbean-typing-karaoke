import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GamePage from './Game Components/GamePage';
import LandingPage from './Game Components/LandingPage';

function App() {
  return (
    <div>
      <h1>Memory Maddening</h1>
      <Router>
        <Switch>
          <Route exact path='/game' component={GamePage} />
          <Route path='/' component={LandingPage} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
