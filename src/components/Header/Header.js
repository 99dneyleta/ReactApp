import React, { Component } from 'react';
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
                <li className="active"><a href="#">HOME</a> </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CATEGORIES <span className="caret"></span></a>
                  <ul className="dropdown-menu dropdowncostume">
                    <li><a href="#">Sport</a></li>
                    <li><a href="#">Old</a></li>
                    <li><a href="#">New</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">DEALERS <span className="caret"></span></a>
                  <ul className="dropdown-menu dropdowncostume">
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="3">3</a></li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">CONTACT</a>
                </li>
                <button><span className="postnewcar">POST NEW CAR</span></button>
              </ul>
            </div>
        </nav>
      </div>
    );
  }
}

export default (Header);