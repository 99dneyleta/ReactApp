import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { createCar, getCar, updateCar } from "../../api/cars";
// import axios from 'axios';
// import './styles.css'


class PostNew extends Component {
    state = {
        form: {
            name: '',
            description: '',
            transportType: '',
            run: '',
            fuelConsumption: '',
            volume: '',
            fuel: '',
            transmission: '',
            driveType: '',
            city: '',
            color: '',
            abs: false,
            centralLock: false,
            airbag: false,
            alarms: false,
            price: 0,
            phone: ''
        }
    }

    componentWillMount() {
        // if()
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        if (id) {
            getCar(id).then(result => {
                console.log("123", result)
                this.setState({
                    form: {...result.data},
                });
            })
        }
        
    }


    handleChange = (event) => {
        const { name } = event.target;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const form = this.state.form;

        this.setState({ 
            form: {
                ...form,
                [name]: value 
            }
        });
    }

    addCar = (event) => {
        event.preventDefault();
        const { id } = this.props.match.params;
        if (id) {
            updateCar(id, this.state.form).then(result => {
                console.log("123", result)
                this.props.history.push("/show-all");
                
            })
        }else{
            createCar(this.state.form).then(response => {
                alert("Responnse status", response);
                this.props.history.push("/show-all");
            }).catch(error => {
                alert("Error", error);
            })
        }
    }

    render() {
        const { form } = this.state;
        return (
            <form onSubmit={this.addCar}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Brand</label>
                    <input type="text" name="name" value={form.name} onChange={this.handleChange} maxLength="100" className="form-control" placeholder="Enter Brand" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">City</label>
                    <input type="text" name="city" value={form.city} onChange={this.handleChange} maxLength="100" className="form-control" placeholder="Enter City" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Color</label>
                    <input type="text" name="color" value={form.color} onChange={this.handleChange} maxLength="100" className="form-control" placeholder="Enter Color" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Phone</label>
                    <input type="text"  name="phone" value={form.phone} onChange={this.handleChange}  maxLength="100" className="form-control" placeholder="Enter Phone" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Fuel consumption</label>
                    <input type="decimal"  name="fuelConsumption" value={form.fuelConsumption} onChange={this.handleChange} className="form-control" placeholder="Enter fuel consumption" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Price</label>
                    <input type="number" name="price" value={form.price} onChange={this.handleChange} className="form-control" placeholder="Enter Price" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Volume</label>
                    <input type="decimal" name="volume" value={form.volume} onChange={this.handleChange} className="form-control" placeholder="Enter Volume" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Mileage</label>
                    <input type="number" name="run" value={form.run} onChange={this.handleChange} className="form-control" placeholder="Enter Mileage" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Type of drive</label>
                    <select id="inputState" className="form-control" name="fuelConsumption" value={form.fuelConsumption} onChange={this.handleChange}>
                        <option value="1">full drive</option>
                        <option value="2">front drive</option>
                        <option value="3">rear drive</option>
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Fuel</label>
                    <select id="inputState" className="form-control" name="fuel" value={form.fuel} onChange={this.handleChange}>
                        <option value="1">Petrol</option>
                        <option value="2">Diesel</option>
                        <option value="3">Gas/Gasoline</option>
                        <option value="4">Hybrid</option>
                        <option value="5">Electro</option>
                        <option value="6">Other</option>
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Transmission</label>
                    <select id="inputState" className="form-control" name="transmission" value={form.transmission} onChange={this.handleChange}>
                        <option value="1">Manual</option>
                        <option value="2">Mechanic</option>
                        <option value="3">Automatic</option>
                        <option value="4">Typewriter</option>
                        <option value="5">Adaptive</option>
                        <option value="6">Variator</option>
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Type of transport</label>
                    <select id="inputState" className="form-control" name="transportType" value={form.transportType} onChange={this.handleChange}>
                        <option selected>Choose..</option>
                        <option value="1">Cars</option>
                        <option value="2">Moto</option>
                        <option value="3">Special machinery</option>
                        <option value="4">Trucks</option>
                        <option value="5">Trailers</option>
                        <option value="6">Buses</option>
                        <option value="7">Motorhomes</option>
                        <option value="8">Water</option>
                        <option value="9">Air</option>
                    </select>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="abs" name="abs" checked={form.abs} onChange={this.handleChange} />
                    <label className="form-check-label" htmlFor="abs">Abs</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="airbag" name="airbag" checked={form.airbag} onChange={this.handleChange} />
                    <label className="form-check-label" htmlFor="airbag">Airbag</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="alarms" name="alarms" checked={form.alarms} onChange={this.handleChange} />
                    <label className="form-check-label" htmlFor="alarms">Alarms</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="Centrallock" name="centralLock" checked={form.centralLock} onChange={this.handleChange} />
                    <label className="form-check-label" htmlFor="Centrallock">Central lock</label>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" name="description" value={form.description} onChange={this.handleChange} />
                </div>



                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default withRouter(PostNew);