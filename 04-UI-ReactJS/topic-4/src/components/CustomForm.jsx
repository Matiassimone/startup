import React, { Component } from 'react';
import './customForm.css';
import movieService from '../services/movieService';

import Store from '../Store';
import {addMovie, errorForm, endEditMovie, loadMovies} from  '../ActionCreators';

class CustomForm extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        let date = new Date();
        let errorsList = [];

        if (this.year.value < 1895 || this.duration.value < 1 || this.year.value > date.getFullYear()) {

            if (this.year.value < 1895) {
                errorsList.push("No existe una pelicula anterior a 1895!");
            }
            if (this.duration.value < 1) {
                errorsList.push("No se admiten numeros negativos!");
            }
            if (this.year.value > date.getFullYear()) {    
                errorsList.push("La fecha todavia no se ah estrenado!");
            }

            Store.dispatch(errorForm(errorsList)); 

        } else {

            let ID = 0;

            if (this.props.title) {
                ID = this.props.id;

                let movie = {
                    title: this.title.value,
                    year: this.year.value,
                    duration: this.duration.value,
                    id: ID
                }
                
                Store.dispatch(endEditMovie(movie));
                Store.dispatch(loadMovies());
                
            } else {
                ID = movieService.nextId();
                let movie = {title: this.title.value, year: this.year.value, duration: this.duration.value, id: ID};
                  
                Store.dispatch(addMovie(movie));
            }

            document.getElementById("formMovie").reset();
            Store.dispatch(errorForm([]));
        }
    }

    render() {
        if (this.props.title) {
            this.title.value = this.props.title;
            this.year.value = this.props.year;
            this.duration.value = this.props.duration;
        }
        return (
            <form onSubmit={this.handleSubmit} id="formMovie" className="simpleForm">
                <div className="displayGrid">
                    <div className="col-1-row-1">
                        <label htmlFor="title">Title : </label>
                        <input type="text" name="title" className="simpleInput" placeholder=" Lord of The Rings "  ref={title=>{this.title = title;}} required/>
                    </div>
                    <div className="col-1-row-1">
                        <label htmlFor="year">Year : </label>
                        <input type="number" name="year" className="simpleInput" placeholder=" 2005 " min="1895" ref={year=>{this.year = year;}} id="year" required/>
                    </div>
                    <div className="col-1-row-1">
                        <label htmlFor="duration">Duration : </label>
                        <input type="number" name="duration" className="simpleInput" placeholder= " 160 " min="1" ref={duration=>{this.duration = duration;}} id="duration" required/>
                    </div>  
                    <button className="simpleBotton" >Add</button>
                </div>
            </form>
        );
    }
}

export default CustomForm;