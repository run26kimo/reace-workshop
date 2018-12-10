import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/abc" exact component={Home} ></Route>
      </Router>
    )
  }
}

export default App;
