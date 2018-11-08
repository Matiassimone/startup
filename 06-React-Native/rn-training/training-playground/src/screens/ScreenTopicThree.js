import React from 'react';
import { Text, View, ScrollView, AppRegistry, TextInput} from 'react-native';
import styles from './screenThree.style.js';


export default class ScreenTopicTwo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }


  render() {
    return (
        <View style={styles.container}>
          <ScrollView>

              <Text style={[styles.text]}>Ex.1</Text>

              <View style={[styles.exerciseContainer]}>
                <TextInput
                  style={[styles.inputText]}
                  placeholder=" Type Here! "
                  onChangeText={(text) => this.setState({text})}>
                </TextInput>
              </View>

          </ScrollView>
        </View>

    );
  }
}
