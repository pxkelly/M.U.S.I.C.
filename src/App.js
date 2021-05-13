import React from 'react';
import { HashRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SynthPage from "./SynthPage.js";
import HomePage from "./HomePage.js"
import 'bootstrap/dist/css/bootstrap.min.css';

const NoMatch = () => (
  <div className = "error">
  <h1> ERROR: Page not found </h1>
  </div>
);

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/synth" component={ SynthPage } />
        <Route component={ NoMatch } />
      </Switch>
    </HashRouter>
  );
}

export default App;
