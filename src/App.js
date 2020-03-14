import React, { Component } from 'react';
import TextField from '../src/component/textField/textfield';
import './App.css'

class App extends Component {
  render() {
    return (
      <div basename="/react-auth-ui/">
          <div className="App__Form">
             <TextField/>
          </div>
      </div>
    );
  }
}

export default App;