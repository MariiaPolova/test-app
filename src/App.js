import React, { Component } from 'react';
import { BrowserRouter,  Route } from 'react-router-dom'

import './App.css';
import LogIn from './Components/LogIn/LogIn';
import VinnytsiaDashboard from './Components/Dashboard/VinnytsiaDashboard';
import LvivDashboard from './Components/Dashboard/LvivDashboard';


class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
          <div className="App">
              <Route exact={true} path="/" component={LogIn} />
              <Route path="/vinnytsia" component={VinnytsiaDashboard} />
              <Route path="/lviv" component={LvivDashboard} />
          </div>
      </BrowserRouter>


    );
  }
}

export default App;
