import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';


export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={[styles.header]}><Text>Bootcamp UI</Text></View>
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
                  source={require('./public/html5.png')}
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

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#247BA0'
  },
  header: {
    height: 40,
    left: 0,
    right: 0,
    top: 0,
    padding: 10 ,
    position: 'absolute',
    backgroundColor: '#FF1654',
    zIndex:10,
    alignItems: 'center'
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#70C1B3',
    justifyContent: 'center',
    marginBottom: 10
  },
  scroll: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#FF1654',
    fontWeight: 'bold'
  },
  boxImgFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxImgUpload: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
