import React, { Component } from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './appTouchableOpacity.style.js';

class AppTouchableOpacity extends Component {

    constructor(props) {
        super(props);
    }

    touchableStyle = () => {
        if (this.props.disabled) {
            return {
                borderColor: '#CAD0D5',
                borderWidth: 1,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center'
            }

        } else {
            if(this.props.styleTouchable === 'primary') {
                return {
                    borderColor: '#5CBAA2',
                    borderWidth: 1,
                    borderRadius: 50,
                    backgroundColor: '#5CBAA2',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center'
                }

            } else if(this.props.styleTouchable === 'secondary') {
                return {
                    borderColor: '#1B4D76',
                    borderWidth: 1,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center'
                }
            }
        }
    }

    textStyle = () => {
        if (this.props.disabled) {
            return {
                fontFamily: 'Roboto',
                color: '#CAD0D5'
            }
            
        } else {
            if(this.props.styleTouchable === 'primary') {
                return {
                    fontFamily: 'Roboto',
                    color: '#EFF8F6'
                }

            } else if(this.props.styleTouchable === 'secondary') {
                return {
                    fontFamily: 'Roboto',
                    color: '#1B4D76'
                }
            }   
        }

    }

    render() {
        return(
            <View style={[styles.container]}>
                <View style={[this.touchableStyle(), styles.smallBotton]}>
                  <TouchableOpacity 
                    disabled= {this.props.disabled}
                    onPress={() => this.props.clearText()}>
                    <Text style={this.textStyle()}>
                        {this.props.title}
                    </Text>
                  </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default AppTouchableOpacity;
