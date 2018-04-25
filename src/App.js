import React, { Component } from 'react';
import './App.css';
import SideBar from './Components/SideBar/SideBar.js';
import Dashboard from './Components/Dashboard/Dashboard.js'

class App extends Component {


  render() {
    return (
      <div className="App">
          <SideBar/>
          <Dashboard/>
      </div>
    );
  }
}

export default App;
