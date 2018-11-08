import React from 'react';
import { Text, View, ScrollView, TouchableOpacity} from 'react-native';
import styles from './screenThree.style.js';
import AppTextInput from '../components/AppTextInput';


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

  render() {
    return (
        <View style={styles.container}>
          <ScrollView>
              <Text style={[styles.text]}>Ex 1, 2, 3.</Text>
              <View style={[styles.exerciseContainer]}>

                <AppTextInput 
                  writeText={this.writeText}
                  password={true}
                  ref='del'{...this.porps}>
                </AppTextInput>

                <View style={[styles.smallBotton, styles.touchable]}>
                  <TouchableOpacity 
                    onPress={() => this.refs.del.clearText()}>
                    <Text>Clear</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </ScrollView>
        </View>

    );
  }
}

