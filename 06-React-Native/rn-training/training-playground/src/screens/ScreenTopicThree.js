import React from 'react';
import { Text, View, ScrollView, AppRegistry, TextInput, TouchableOpacity} from 'react-native';
import styles from './screenThree.style.js';


export default class ScreenTopicTwo extends React.Component {

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
    this.textInput.clear();
  }

  render() {
    return (
        <View style={styles.container}>
          <ScrollView>
              <Text style={[styles.text]}>Ex 1, 2.</Text>
              <View style={[styles.exerciseContainer]}>

                <TextInput
                  ref={input => {this.textInput = input}}
                  style={[styles.inputText]}
                  placeholder="Type Here!"
                  onChangeText={(text) => this.writeText({text})}>
                </TextInput>

                <View style={[styles.smallBotton, styles.touchable]}>
                  <TouchableOpacity 
                    onPress={() => this.clearText()}>
                    <Text>Clear</Text>
                  </TouchableOpacity>
                </View>

              </View>
          </ScrollView>
        </View>

    );
  }
}
