import React, { Component } from 'react';
import '../../styles/contactstyle.css'


class Contact extends Component {

    render() {
      return (
        <div className="allcontain">
        <div id="carousel-up" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner " role="listbox">
                <div className="item active">
                    <img src={`${process.env.PUBLIC_URL}/img/oldcar.jpg`} alt="oldcar" />
                    <div className="carousel-caption">
                        <h2>Porsche 356</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur ,<br />
                            sed do eiusmod tempor incididunt ut labore </p>
                    </div>
                </div>
                <div className="item">
                    <img src={`${process.env.PUBLIC_URL}/img/porche.jpg`}  alt="porche" />
                    <div className="carousel-caption">
                        <h2>Porche</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur ,<br />
                            sed do eiusmod tempor incididunt ut labore </p>
                    </div>
                </div>
                <div className="item">
                    <img src={`${process.env.PUBLIC_URL}/img/benz.jpg`}  alt="benz" />
                    <div className="carousel-caption">
                        <h2>Car</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur ,<br />
                            sed do eiusmod tempor incididunt ut labore </p>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-default midle-nav">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed textcostume" data-toggle="collapse" data-target="#navbarmidle" aria-expanded="false">
                            <h1>SEARCH TEXT</h1>
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarmidle">
                    <div className="searchtxt">
                        <h1>FAST SEARCH</h1>
                    </div>
                    <form className="navbar-form navbar-left searchformmargin" role="search">
                        <div className="form-group">
                            <input type="text" className="form-control searchform" placeholder="Type model" />
                        </div>
                    </form>
                    <ul className="nav navbar-nav navbarborder">
                        <form className="navbar-form navbar-left searchformmargin" role="search">
                        <div className="form-group">
                            <input type="text" className="form-control searchform" placeholder="Min Year" />
                        </div>
                        <form className="navbar-form navbar-left searchformmargin" role="search">
                        <div className="form-group">
                            <input type="text" className="form-control searchform" placeholder="Max Year" />
                        </div>
                    </form>
                    </form>
                        <li className="li-search"> <button className="searchbutton"><span className="glyphicon glyphicon-search "></span></button></li>
                    </ul>
    
                </div>
            </nav>
        </div>
        <div class="allcontain">
          <div class="contact">
            <div class="newslettercontent">
              <div class="leftside">
                <img id="image_border" src={`${process.env.PUBLIC_URL}/img/border.png`} alt="border" />
                  <div class="contact-form">
                    <h1>Contact Us</h1>
                      <div class="form-group group-coustume">
                        <input type="text" class="form-control name-form" placeholder="Name"/>
                        <input type="text" class="form-control email-form" placeholder="E-mail"/>
                        <input type="text" class="form-control subject-form" placeholder="Subject"/>
                        <textarea rows="4" cols="50" class="message-form"></textarea>
                        <button type="submit" class="btn btn-default btn-submit">Submit</button>
                      </div>
                  </div>
              </div>
              <div class="google-maps">
              <div id="googleMap"></div>

              </div>
            </div>

          </div>
        </div>
    </div>
      );
    }
  }
  
  export default (Contact);