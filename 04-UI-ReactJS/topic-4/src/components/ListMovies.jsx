import React, { Component } from 'react';
import Movie from './Movie';

class ListMovies extends Component {

    handleEdit = (id) => {
        this.props.onEdit(id);
    }

    handleDelete = (id) => {
        this.props.onDelete(id);
    }

    createList = () => {
        let movieList = this.props.movieList();
        let list = []

        movieList.forEach(element => {
            list.push(
                <Movie 
                title={element.title} 
                year={element.year} 
                duration={element.duration} 
                id={element.id} 
                key={element.id}
                onEdit={this.handleEdit}
                onDelete={this.handleDelete}>
                </Movie>);
        }) 
        return list;
    }

    render() {
        return(
            <div className="displayGrid">
                {this.createList()}
            </div>
        )
    }
}

export default ListMovies;
