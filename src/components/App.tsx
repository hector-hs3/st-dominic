import React from 'react';
import logo from 'assets/logo.svg';
import './App.scss';
import Navigation from './navigation/Navigation';

function App() {
  return (
    <div className="App">
      <header >
        <Navigation />
      </header>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
