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
            <div class="card-header" style = {{fontSize: '16px'}}>{this.state.car.name}</div>
                <ul className="list-group list-group-flush" style={{width: '100%', fontSize: '14px'}}>
                <li class="list-group-item">Transport Type: {this.state.car.transportType}</li>
                <li class="list-group-item">Run: {this.state.car.run}</li>
                <li class="list-group-item">Fuel Consumption: {this.state.car.fuelConsumption}</li>
                <li class="list-group-item">Volume: {this.state.car.volume}</li>
                <li class="list-group-item">Fuel: {this.state.car.fuel}</li>
                <li class="list-group-item">Transmission: {this.state.car.transmission}</li>
                <li class="list-group-item">DriveType: {this.state.car.driveType}</li>
                <li class="list-group-item">City: {this.state.car.city}</li>
                <li class="list-group-item">Color: {this.state.car.color}</li>
                <li class="list-group-item">Abs: {String(this.state.car.abs)}</li>
                <li class="list-group-item">Central Lock:{String(this.state.car.centralLock)}</li>
                <li class="list-group-item">Airbag: {String(this.state.car.airbag)}</li>
                <li class="list-group-item">Alarms: {String(this.state.car.alarms)}</li>
                <li class="list-group-item">Phone: {this.state.car.phone}</li>
                <li class="list-group-item">Description: {this.state.car.description}</li>
                <li class="list-group-item">Price: {this.state.car.price}</li>
                </ul>
            </div>
            </div>
            
        );
    }
}

export default Car;