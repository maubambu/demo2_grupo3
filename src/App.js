import React, { Component } from 'react';
import './App.scss';
import Counter from './components/Counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    );
  }
}

export default App;