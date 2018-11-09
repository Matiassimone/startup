import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import ButtonCamera from '../components/ButtonCamera'
import styles from './screenCamera.style';

export default class ScreenCamera extends React.Component {

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  takePhoto = () => {
    if(this.camera){ 
      this.camera.takePictureAsync().then((data) => {
        this.props.navigation.navigate('ShowPicture', {
          pic: data
        });
      });
    }
  }

  flipCamera = () => {
    this.setState({
      type: this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    });
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {

      return <View />;

    } else if (hasCameraPermission === false) {

      return <Text>No access to camera</Text>;

    } else {

      return (
        <View style={[styles.container]}>
          <Camera style={[styles.container]} type={this.state.type} ref={ref => { this.camera = ref; }}>
            <View style={[styles.cameraView]}>

              <TouchableOpacity style={[styles.buttomFlip]}
                onPress={() => {this.flipCamera()}}>
                <Text style={[styles.buttonText]}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>

              <ButtonCamera takePhoto = {this.takePhoto}></ButtonCamera>

            </View>
          </Camera>
        </View>
      );
    }
  }
}