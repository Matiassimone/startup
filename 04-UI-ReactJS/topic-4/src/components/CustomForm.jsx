import React, { Component } from 'react';
import './customForm.css';
import movieService from '../services/movieService';

class CustomForm extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            title: "",
            year: "",
            duration: "",
            id: 0
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let date = new Date();
        
        let errorsList = [];

        if (this.state.year < 1895 || this.state.duration < 1 || this.state.year > date.getFullYear()) {

            if (this.state.year < 1895) {
                errorsList.push("No existe una pelicula anterior a 1895!");
            }
            if (this.state.duration < 1) {
                errorsList.push("No se admiten numeros negativos!");
            }
            if (this.state.year > date.getFullYear()) {    
                errorsList.push("La fecha todavia no se ah estrenado!");
            }

            this.props.onErrors(errorsList);  

        } else {
            let nextID = movieService.nextId();
            this.setState((state) => ({id : nextID}));
            
            movieService.save(this.state.title, this.state.year, this.state.duration, nextID);
            let movie = {title: this.state.title, year: this.state.year, duration: this.state.duration, id: nextID};
            
            this.props.onErrors(errorsList);  
            this.props.onAddMovie(movie);
        }
    }

    handleInputNumberChange = (event) => {
        if (event.target.name === "year") {
            this.setState({year: event.target.value});
        } else {
            this.setState({duration: event.target.value});
        }
    }


    handleInputTextChange = (event) => {
        this.setState({title: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="simpleForm">
                <div className="displayGrid">
                    <h3>Add Movie</h3>
                    <div className="col-1-row-1">
                        <label htmlFor="title">Title : </label>
                        <input type="text" name="title" className="simpleInput" placeholder=" Lord of The Rings " value={this.props.title} onChange={this.handleInputTextChange} required/>
                    </div>
                    <div className="col-1-row-1">
                        <label htmlFor="year">Year : </label>
                        <input type="number" name="year" className="simpleInput" placeholder=" 2005 " min="1895" value={this.props.year} onChange={this.handleInputNumberChange} required/>
                    </div>
                    <div className="col-1-row-1">
                        <label htmlFor="duration">Duration : </label>
                        <input type="number" name="duration" className="simpleInput" placeholder= " 160 " min="1" value={this.props.duration} onChange={this.handleInputNumberChange} required/>
                    </div>  

                    <button className="simpleBotton">Add</button>
                </div>
            </form>
        );
    }
}

export default CustomForm;