import { createDrawerNavigator } from 'react-navigation';

//NavigationDarner
import initialTopicsTopNavigator from './InitialTopicsNavigator';
import cameraFectureNavigator from './CameraFectureNavigator';
import ScreenPosts from './src/screens/ScreenPosts';
import ScreenOnePost from './src/screens/ScreenOnePost';



const AppDarnerNavigator = createDrawerNavigator ({

  InitialTopics: {
    screen: initialTopicsTopNavigator,
  },
  Posts: {
    screen: ScreenPosts,
  },
  Post: {
    screen: ScreenOnePost,
  },
  Camera: {
    screen: cameraFectureNavigator,
  }
}, {
    initialRouteName: 'InitialTopics',
});

export default AppDarnerNavigator;