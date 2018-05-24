import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import queryString from 'query-string';
import { getCars, deleteCar } from "../../api/cars";
// import './styles.css'


class ShowAll extends Component {
    state = {
      cars: [],
      isLoadingCars: true,
      filters: {
        maxYear: "",
        minYear: "",
        transportType: ""
      }
    }

    componentWillMount() {
        const filters = queryString.parse(this.props.location.search);
        console.log(filters)
        this.setState({
            filters
        })
    }

    componentDidMount() {
        getCars().then(result => {
            console.log(result)
            this.setState({
              cars: result.data.list,
              isLoadingCars: false
            }, () => {
                if(Object.keys(this.state.filters).length) {
                    this.onFilter(this.state.filters);
                }
            });
        })
    }

    onFilter = (filters) => {
        let {cars} = this.state;

        if(filters.transportType) {
            cars = cars.filter(item => filters.transportType === item.transportType)
        }

        if(filters.maxPrice) {
            cars = cars.filter(item => item.price <= filters.maxPrice)
        }
        if(filters.minPrice) {
            cars = cars.filter(item => item.price >=  filters.minPrice)
        }

        console.log(cars)

        this.setState({
            cars,
        })
    }

    onDeleteCar = (id) => {
        deleteCar(id).then(() => {
            getCars().then(result => {
                console.log(result)
                this.setState({
                  cars: result.data.list,
                  isLoadingCars: false
                });
            })
        });
    }

    render() {
        return (
            <div style={{height: "calc(100vh - 122px)" }}>
                {this.state.cars.map(car => 
                    <div className="card" className="" style={{width: '18rem', display: 'inline-Block', margin: '5px'}}>
                        <img className="card-img-top" src={`${process.env.PUBLIC_URL}/img/newsletter.jpg`}   alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Price:{car.price}</h5>
                            <p className="card-text">{car.description}
                            </p>
                            <Link to={`/car/${car.id}`} className="btn btn-primary">More info</Link>
                            <Link to={`/car/${car.id}/edit`} style={{marginLeft: '14px'}} className="btn btn-warning">Edit</Link>
                            <div className="btn btn-danger" style={{float: 'right'}} onClick={() => this.onDeleteCar(car.id)}>Del</div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ShowAll;