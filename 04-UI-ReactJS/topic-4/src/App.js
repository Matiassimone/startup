import React, { Component } from 'react';
import logo from './logo.svg';
import './normalize.css';
import './App.css';
import HeadMovies from './components/HeadMovies';
import './grid.css';

class App extends Component {
  render() {
    return (
    <main className="App">
          <header className="App-header">
            <h1>Topic 4 - React</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <HeadMovies></HeadMovies>
      </main>
    );
  }
}

export default App;
