import React, { Component } from 'react';
import CustomForm from './CustomForm';
import ListMovies from './ListMovies';
import movieService from '../services/movieService';
import CustomErrors from './FormErrors';

class HeadMovies extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            movieList: [],
            errors: []
        })
    }

    componentDidMount() {
        let movies = movieService.getAll();
        this.setState({movieList: movies});
    }


    handleAddMovie = (newMovie) => {
        let movieList = this.state.movieList;
        movieList.push(newMovie);

        this.setState({movieList});
    }

    handleMovieChange = () => {
        let list =  this.state.movieList;
        return list;
    }

    handleErrors = (errors) => {
        this.setState({errors});
    }

    handleErrorsChange = () => {
        let listErrors = this.state.errors;
        return listErrors;
    }

    render() {
        return (
            <div>
                <CustomErrors errors={this.handleErrorsChange}></CustomErrors>
                <CustomForm onAddMovie={this.handleAddMovie} onErrors={this.handleErrors}></CustomForm>
                <ListMovies movieList={this.handleMovieChange}></ListMovies>
            </div>
        );
    }
}

export default HeadMovies;
