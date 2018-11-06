import React, { Component } from 'react';
import CustomForm from './CustomForm';
import ListMovies from './ListMovies';
import movieService from '../services/movieService';
import CustomErrors from './FormErrors';
import './modalForm.css';

import Store from '../Store';

class HeadMovies extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            movieEdit: [],
            errors: []
        })

        Store.subscribe(() => {
            document.getElementById("openModal").style.display = Store.getState().modalStatus;

            this.setState({
                movieEdit: Store.getState().movieEdit,
                errors: Store.getState().errors
            });
        });
    }


    closeModal = () => {
        document.getElementById("openModal").style.display = "none";
    }

    render() {
        return (
            <div>
                <CustomErrors errors={this.state.errors}></CustomErrors>

                <CustomForm></CustomForm>

                <ListMovies></ListMovies>

                <div id="openModal" className="modalDialog">
                    <div>
                        <a href="#close" title="Close" className="close" onClick={() => {this.closeModal()}}>X</a>
                        <h2>Editar</h2>
                        
                        <CustomForm 
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
