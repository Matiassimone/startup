import React, { Component } from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './buttomCamera.style';

class ButtomCamera extends Component {

    render() {
        return(
            <View style={[styles.container]}>
                  <TouchableOpacity style={[styles.smallBotton]}
                    onPress={() => this.props.takePhoto()}>
                  </TouchableOpacity>
            </View>
        );
    }
}
export default ButtomCamera;
