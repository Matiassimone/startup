import React, { Component } from 'react';
import './movie.css'

class Movie extends Component {

    render() {
        return (
            <div className="col-1-row-1">
                <div className="card">
                    <div className="text">
                        <p className="fabEdit">Edit</p>
                        <p className="fabDel">Delete</p>
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
