import movieService from './services/movieService'

const loadMovies = () => {
    const movieList = movieService.getAll();
    return {
        type: "LOAD_LIST",
        movieList
    };
};

const addMovie = movie => {
    movieService.save(movie.title, movie.year, movie.duration, movie.id);
    return {
        type: "ADD_TO_LIST",
        movie
    };
};

const deleteMovie = id => {
    movieService.delete(id);
    return {
        type: "DELETE_TO_LIST",
        id
    };
};

const startEditMovie = id => {
    let movie = movieService.getOne(id);
    return {
        type: "START_EDIT_MOVIE",
        modalStatus: "block",
        movie
    };
};

const endEditMovie = movie => {
    movieService.change(movie);
    return {
        type: "END_EDIT_MOVIE",
        modalStatus: "none"
    };
};

const errorForm = errors => {
    return {
        type: "ERROR_FORM",
        errors
    };
};

export { addMovie, deleteMovie, loadMovies, startEditMovie, errorForm, endEditMovie};