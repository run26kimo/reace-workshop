import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo.js';
import Link from './components/Link.js';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo alt="abcdefg"/>
          <Logo />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link />
          <Link
            text="FB"
            href="https://fb.com" />
        </header>
      </div>
    );
  }
}

export default Home;
