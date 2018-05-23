import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getCar } from "../../api/cars";
// import './styles.css'


class Car extends Component {
    state = {
        car: {},
        isLoadingCars: true,
    }

    componentDidMount() {
        console.log(123);
        const { id } = this.props.match.params;
        getCar(id).then(result => {
            console.log("123", result)
            this.setState({
                car: result.data,
                isLoadingCars: false
            });
        })
    }

    render() {
        return (
            <div >
            <div className="card" style={{width: '50%', textAlign: 'center', marginLeft: '25%'}}>
            <div class="card-header">{this.state.car.name}</div>
                <ul className="list-group list-group-flush" style={{width: '100%'}}>
                    {Object.entries(this.state.car).map(([key, value]) => (
                        <li class="list-group-item">{`${key}:${value}`}</li>
                    ))}
                </ul>
            </div>
            </div>
            
        );
    }
}

export default Car;