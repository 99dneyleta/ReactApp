import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import './styles.css'


class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <ul className="socialicon">
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
          </ul>
          <ul className="givusacall">
            <li>Give us a call : +66666666 </li>
          </ul>
          <ul className="logreg">
            <li><a href="#">Login </a> </li>
            <li><a href="#"><span className="register">Register</span></a></li>
          </ul>
        </div>
        <nav className="topnavbar navbar-default topnav">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed toggle-costume" data-toggle="collapse" data-target="#upmenu" aria-expanded="false">
                <span className="sr-only"> Toggle navigaion</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand logo" href="#"><img src={`${process.env.PUBLIC_URL}/img/logo1.png`} alt="logo" /></a>
            </div>
            </div>
            <div className="collapse navbar-collapse" id="upmenu">
              <ul className="nav navbar-nav" id="navbarontop">
                <li className="active"><Link to="/">HOME</Link> </li>
                <li>
                <Link to="/show-all">SHOW ALL</Link>
                </li>
                <li>
                <Link to="/contact">CONTACT</Link>
                </li>
                <button><span className="postnewcar"><Link className="link" to="/post-new">POST NEW CAR</Link></span></button>
              </ul>
            </div>
        </nav>
      </div>
    );
  }
}

export default (Header);