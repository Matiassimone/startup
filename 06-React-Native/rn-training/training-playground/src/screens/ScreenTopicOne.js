import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import styles from './ScreenOne.style.js';


export default class ScreenTopicOne extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <ScrollView>
              <View style={[styles.scroll]}>
                <View style={[styles.box]}><Text style={[styles.text]}>Java Script ES6</Text></View>
                <View style={[styles.box]}>
                  <Image 
                  style={[styles.boxImgFlex]}
                  source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png'}}
                  />
                </View>
                <View style={[styles.box]}><Text style={[styles.text]}>HTML 5</Text></View>
                <View style={[styles.box]}>
                  <Image 
                  style={[styles.boxImgUpload]}
                  source={require('../../public/html5.png')}
                  />
                </View>
                <View style={[styles.box]}><Text style={[styles.text]}>CSS 3</Text></View>
                <View style={[styles.box]}>
                  <Image 
                  style={[styles.boxImgFlex]}
                  source={{uri: 'https://www.adtrak.co.uk/wp-content/uploads/2018/03/css-selectors-hero.jpg'}}
                  />
                </View>
              </View>
          </ScrollView>
        </View>

    );
  }
}
