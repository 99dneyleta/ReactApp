import React, { Component } from 'react';
// import * as Cookies from 'js-cookie';
// import Loader from '../../components/Loader'
// import { getVenue } from "../../api/venues";
// import { VENUE } from '../../constants';
// import './styles.css'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   isLoadingGetVenue: true,
    //   token: "",
    //   venue: {},
    };
  }

//   componentWillMount() {
//     const { token } = this.props.match.params;
//     this.setState({ token })
//   }

//   componentDidMount() {
//     getVenue(this.state.token).then(result => {
//       this.setState({
//         venue: {...result.data},
//         isLoadingGetVenue: false
//       });

//       Cookies.set(VENUE.VENUE_COOKIE_KEY, {
//         token: this.state.token
//       }, {expires: 1});

//     }).catch(() => {
//       this.props.history.push('/not-found');
//     })
//   }

  render() {
    return (
      <div>
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
            <div className="newslettercontent">
		        <div className="leftside">
			        <img src={`${process.env.PUBLIC_URL}/img/border.png`} alt="border" />
			        <h1>NEWSLETTER</h1>
			        <p>Subscribe to the COLLECTIONCARS mailing list to <br/>
				        receive updates on new arrivals, special offers <br/>
				        and other discount information.</p>
		        </div>
		        <div className="rightside">
			        <img className="newsimage" src={`${process.env.PUBLIC_URL}/img/newsletter.jpg`} alt="newsletter" />
			        <input type="text" className="form-control" id="subemail" placeholder="EMAIL" />
			        <button>SUBSCRIBE</button>
		        </div>
	        </div>
        </div>
      </div>
    );
  }
}


export default Home;
