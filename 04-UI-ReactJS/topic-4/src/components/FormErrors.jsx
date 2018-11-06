import React, { Component } from 'react';
import './customErrors.css';

class FormErrors extends Component {

    createErrorsList = () => {
        let errorsList = this.props.errors;
        let list = []

        errorsList.forEach(element => {
            list.push(<div className="col-6-row-1"><p className="simpleError">{element}</p></div>);
        });

        return list;
    }

    render() {
        return (
            <div className="displayGrid">
                {this.createErrorsList()}
            </div>
        );
    }
}

export default FormErrors;