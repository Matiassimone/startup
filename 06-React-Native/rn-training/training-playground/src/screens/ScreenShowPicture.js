import React from 'react';
import { View, Image, Button } from 'react-native';

import styles from './screenShowPicture.style';

export default class ScreenShowPicture extends React.Component {

  render() {
    const { navigation } = this.props;
    const pic = navigation.getParam('pic', false);

    let url = pic.uri;
    
      return (
        <View style={[styles.container]}>
            <Image source={{uri: url}}  style={[styles.imgNormalize]}/>
            <Button onPress={() => {this.props.navigation.navigate('Camera')}}
                title="Go to Camera"></Button>
        </View>
      )
    }
  }
