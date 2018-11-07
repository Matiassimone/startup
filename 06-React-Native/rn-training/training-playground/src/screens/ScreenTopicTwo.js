import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import styles from './ScreenTwo.style.android.js';


export default class ScreenTopicTwo extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <ScrollView>

              <Text style={[styles.text]}>Ex.1</Text>

              <View style={[styles.exerciseContainer]}>
                <View style={[styles.smallBox, styles.colorRedOrange]} />
                <View style={[styles.mediumBox, styles.colorDarkPurple]} />
                <View style={[styles.bigBox, styles.colorWrite]} />
              </View>

              <Text style={[styles.text]}>Ex.2</Text>

              <View style={[styles.exerciseContainer]}>
                <View style={[styles.smallBox, styles.colorRedOrange, styles.borderRadius]} />
                <View style={[styles.mediumBox, styles.colorDarkPurple, styles.borderRadius]} />
                <View style={[styles.bigBox, styles.colorWrite, styles.borderRadius]} />
              </View>


          </ScrollView>
        </View>

    );
  }
}
