import { createStackNavigator } from 'react-navigation'

//Stack
import ScreenCamera from './src/screens/ScreenCamera';
import ScreenShowPicture from './src/screens/ScreenShowPicture';


export default cameraFectureNavigator = createStackNavigator ({

  Camera: {
    screen: ScreenCamera
  },

  ShowPicture: {
    screen: ScreenShowPicture
  }

},{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
})


