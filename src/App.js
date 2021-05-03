import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from "./Home.js";

const Nomatch = () => (
  <div className = "error">
  <h1> ERROR: Page not found </h1>
  </div>
);

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route component={ Nomatch } />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
