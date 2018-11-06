import React, { Component } from 'react';
import CustomForm from './CustomForm';
import ListMovies from './ListMovies';
import movieService from '../services/movieService';
import CustomErrors from './FormErrors';
import './modalForm.css';

class HeadMovies extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            movieList: [],
            errors: [],
            movieEdit: []
        })
    }

    componentDidMount() {
        let movies = movieService.getAll();
        this.setState({movieList: movies});
    }


    handleAddMovie = (newMovie) => {
        let movieList = this.state.movieList;
        movieList.push(newMovie);

        this.setState({movieList : movieList});
    }

    handleMovieChange = () => {
        let list =  this.state.movieList;
        return list;
    }

    handleErrors = (errors) => {
        this.setState({errors : errors});
    }

    handleErrorsChange = () => {
        let listErrors = this.state.errors;
        return listErrors;
    }

    handleEdit = (id) => {
        let movie = movieService.getOne(id);

        this.setState({ 
            movieEdit: movie 
        },() => {document.getElementById("openModal").style.display = "block"})
    }

    handleDelete = (id) => {
        movieService.delete(id);
        this.setState((state) => ({ movieList: movieService.getAll() }));
    }

    closeModal = () => {
        document.getElementById("openModal").style.display = "none";
        this.setState((state) => ({ movieList: movieService.getAll() }));
    }

    render() {
        return (
            <div>
                <CustomErrors errors={this.handleErrorsChange}></CustomErrors>

                <CustomForm 
                onAddMovie={this.handleAddMovie} 
                onErrors={this.handleErrors}>
                </CustomForm>

                <ListMovies 
                movieList={this.handleMovieChange} 
                onEdit={this.handleEdit} 
                onDelete={this.handleDelete}>
                </ListMovies>

                <div id="openModal" className="modalDialog">
                    <div>
                        <a href="#close" title="Close" className="close" onClick={() => {this.closeModal()}}>X</a>
                        <h2>Editar</h2>
                        
                        <CustomForm 
                        onAddMovie={this.handleAddMovie} 
                        onErrors={this.handleErrors}
                        onCloseModal={this.closeModal}

                        title={this.state.movieEdit.title}
                        year={this.state.movieEdit.year}
                        duration={this.state.movieEdit.duration}
                        id={this.state.movieEdit.id}>
                        </CustomForm>
                    </div>
                </div>

            </div>
        );
    }
}

export default HeadMovies;
