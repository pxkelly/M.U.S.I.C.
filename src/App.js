import React from 'react';
import { HashRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    <HashRouter basename="/">
      <Route exact path="/" component={ Home } />
      <Route component={ Nomatch } />
    </HashRouter>
  );
}

export default App;
