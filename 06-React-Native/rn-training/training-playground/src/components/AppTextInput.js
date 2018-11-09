import React, { Component } from 'react';
import {View, TextInput} from 'react-native';
import styles from './appTextInput.style.js';

class AppTextInput extends Component {

    constructor(props) {
        super(props);
    }

    clearText = () => {
        this.textInput.clear();
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    ref={input => {this.textInput = input}}
                    style={[styles.inputText]}
                    placeholder="Type Here!"
                    onChangeText={(text) => this.props.writeText({text})}
                    secureTextEntry={this.props.password}>
                </TextInput>
            </View>
        );
    }
}
export default AppTextInput;
