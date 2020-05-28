import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to Shrinkrl - Shrink Your URL</h2>
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div>
          <form action="api/new" method="POST">
            <label for="url_input">URL to be shortened</label>
            <input id="url_input" type="text" name="url" value="https://www.freecodecamp.org"/>
            <input type="submit" value="POST URL"/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
