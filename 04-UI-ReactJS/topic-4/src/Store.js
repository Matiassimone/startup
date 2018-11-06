import { createStore } from 'redux';

const reducer = (state, action) => {
    if(action.type === "ADD_TO_LIST") {
        return {
            ...state,
            movieList: state.movieList.concat(action.movie)
        }
    } else if (action.type === "DELETE_TO_LIST") {
        return {
            ...state,
            movieList: state.movieList.filter(movie => movie.id !== action.id)
        }
    } else if (action.type === "LOAD_LIST") {
        return {
            ...state,
            movieList: action.movieList   
        }
    } else if (action.type === "START_EDIT_MOVIE") {
        return {
            ...state,
            modalStatus: action.modalStatus,
            movieEdit : action.movie 
        }
    } else if (action.type === "END_EDIT_MOVIE") {
        return {
            ...state,
            modalStatus: action.modalStatus  
        }
    }else if (action.type === "ERROR_FORM") {
        return {
            ...state,
            errors : action.errors
        }
    }

    return state;
}

export default createStore(reducer, {movieList: [], movieEdit: [], errors: [], modalStatus: ""});