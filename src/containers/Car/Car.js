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
            <div>
                <ul>
                    {console.log(this.state.car)}
                    {Object.entries(this.state.car).map(([key, value]) => (
                        <li>{`${key}:${value}`}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Car;