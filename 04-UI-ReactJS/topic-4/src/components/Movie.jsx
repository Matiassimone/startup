import React, { Component } from 'react';
import './movie.css'

import Store from '../Store';
import {deleteMovie, startEditMovie} from  '../ActionCreators';

class Movie extends Component {

    render() {
        return (
            <div className="col-1-row-1">
                <div className="card">
                    <div className="text">
                        <p className="fabEdit" onClick={() => 
                        {Store.dispatch(startEditMovie(this.props.id))}} 
                        >Edit</p>

                        <p className="fabDel" onClick={() => 
                        {Store.dispatch(deleteMovie(this.props.id))}} 
                        >Delete</p>

                        <h2>{this.props.title} (No {this.props.id})</h2>
                        <h3>Year: {this.props.year}</h3>
                        <h3>Duration: {this.props.duration} min</h3> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;
