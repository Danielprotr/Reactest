import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" width="200" alt="logo" />
        
        <h1>Beleex app</h1>
        <p>
          keep on working hard
        </p>
        <a
          className="App-link"
          href="https://beleex.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beleex
        </a>
      </header>
    </div>
  );
}

export default App;
