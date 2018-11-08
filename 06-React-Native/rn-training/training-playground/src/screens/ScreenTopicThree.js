import React from 'react';
import { Text, View, ScrollView, TouchableOpacity} from 'react-native';
import styles from './screenThree.style.js';
import AppTextInput from '../components/AppTextInput';
import AppTouchableOpacity from '../components/AppTouchableOpacity';


export default class ScreenTopicThree extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  writeText = text => {
    this.setState({
      text
    })
  }

  clearText = () => {
    this.refs.del.clearText()
  }

  render() {
    return (
        <View style={styles.container}>
          <ScrollView>
              <Text style={[styles.text]}>Ex 1, 2, 3, 4.</Text>
              <View style={[styles.exerciseContainer]}>

                <AppTextInput 
                  writeText={this.writeText}
                  password={true}
                  ref='del'{...this.porps}>
                </AppTextInput>

                <AppTouchableOpacity title="CONTINUE" styleTouchable="primary" clearText={this.clearText}></AppTouchableOpacity>
                <AppTouchableOpacity title="SIGN UP" styleTouchable="secondary" clearText={this.clearText}></AppTouchableOpacity>
                <AppTouchableOpacity title="CONTINUE" disabled={true} clearText={this.clearText}></AppTouchableOpacity>

              </View>
          </ScrollView>
        </View>

    );
  }
}

