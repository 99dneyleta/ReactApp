import React, { Component } from 'react';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        search: {}
    //   isLoadingGetVenue: true,
    //   token: "",
    //   venue: {},
    };
  }

  onChangeSearch = (e) => {
      this.setState({
        search: {
            ...this.state.search,
            [e.target.name]: e.target.value
        }
      })
  }

  onSearch = () => {
      console.log(this.state.search);
      this.props.history.push(`/show-all?${queryString.stringify(this.state.search)}`);
  }


  render() {
      const { search } = this.state;
    return (
      
        <div className="allcontain">
<a className="navbar-brand logo" href="#"><img src={`${process.env.PUBLIC_URL}/img/logo1.png`} alt="logo" /></a>
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
                                <select id="inputState" placeholder="Type transport" className="form-control searchform" name="transportType" value={search.transportType} onChange={this.onChangeSearch}
                                style={{height: '42px', fontSize: '16px'}}>
                                    <option value="" selected>Type transport</option>
                                    <option value="Cars">Cars</option>
                                    <option value="Moto">Moto</option>
                                    <option value="Special machinery">Special machinery</option>
                                    <option value="Trucks">Trucks</option>
                                    <option value="Trailers">Trailers</option>
                                    <option value="Buses">Buses</option>
                                    <option value="Motorhomes">Motorhomes</option>
                                    <option value="Water">Water</option>
                                    <option value="Air">Air</option>
                                </select>
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbarborder">
                            <form className="navbar-form navbar-left searchformmargin" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control searchform" placeholder="Min Price" name="minPrice" value={search.minPrice} onChange={this.onChangeSearch} />
                            </div>
                            <form className="navbar-form navbar-left searchformmargin" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control searchform" placeholder="Max Price" name="maxPrice" value={search.maxPrice} onChange={this.onChangeSearch} />
                            </div>
                        </form>
                        </form>
                            <li className="li-search"> <button className="searchbutton" onClick={this.onSearch}><span className="glyphicon glyphicon-search "></span></button></li>
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
      
    );
  }
}


export default withRouter(Home);
