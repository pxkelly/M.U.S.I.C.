import React from 'react';
import { HashRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./Home.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <HashRouter basename="/">
      <Route exact path="/" component={ Home } />
    </HashRouter>
  );
}

export default App;
