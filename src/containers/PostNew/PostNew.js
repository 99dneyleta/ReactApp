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
                        <option value="full drive">full drive</option>
                        <option value="front drive">front drive</option>
                        <option value="rear drive">rear drive</option>
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Fuel</label>
                    <select id="inputState" className="form-control" name="fuel" value={form.fuel} onChange={this.handleChange}>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Gas/Gasoline">Gas/Gasoline</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Electro">Electro</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Transmission</label>
                    <select id="inputState" className="form-control" name="transmission" value={form.transmission} onChange={this.handleChange}>
                        <option value="Manual">Manual</option>
                        <option value="Mechanic">Mechanic</option>
                        <option value="Automatic">Automatic</option>
                        <option value="Typewriter">Typewriter</option>
                        <option value="Adaptive">Adaptive</option>
                        <option value="Variator">Variator</option>
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Type of transport</label>
                    <select id="inputState" className="form-control" name="transportType" value={form.transportType} onChange={this.handleChange}>
                        <option selected>Choose..</option>
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
                
                <div style={{marginTop:'24px', display:'inline-block'}}>
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
                </div>
                
                <div className="form-group">
                <br />
                <br />
                <br />
                    <label htmlFor="description">Description</label>
                    <br />
                    <textarea style={{height:'height: 80px'}} className="form-control" id="description" name="description" value={form.description} onChange={this.handleChange} />
                </div>
                <button style={{marginLeft:'50%', marginTop: '50px',    marginBottom: '87px'}} type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default withRouter(PostNew);