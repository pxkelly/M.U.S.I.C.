import React from 'react';
import { HashRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from "./Home.js";

function App() {
  return (
    <HashRouter basename="/">
      <Route exact path="/" component={ Home } />
    </HashRouter>
  );
}

export default App;
