import React, { Component } from 'react';
import Searching from './Searching';
import Adding from './Adding';
import Printing from './Printing';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Searching} />
          <Route path="/printing" component={Printing}/>
          <Route path="/adding" component={Adding}/>
       
        </Switch>
      </Router>
    )}
}

export default App;
