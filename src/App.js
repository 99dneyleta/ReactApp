import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          {/* <Route path="/not-found" component={NotFound} exact/> */}
          {/* <Route path="/:token" component={ConnectStripe}/> */}
          {/* <Route path="/" component={NotFound}/> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
