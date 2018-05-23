import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import Contact from './containers/Contact';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from './components/Footer';
import PostNew from './containers/PostNew/PostNew';
import ShowAll from './containers/ShowAll';
import Car from './containers/Car';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="allcontain">
          <Header/> 
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/contact" component={Contact}/>
              <Route path="/post-new" component={PostNew}/>
              <Route path="/show-all" component={ShowAll}/>
              <Route path="/car/:id" component={Car} exact />
              <Route path="/car/:id/edit" component={PostNew} />
              {/* <Route path="/:token" component={ConnectStripe}/> */}
              {/* <Route path="/" component={NotFound}/> */}
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
