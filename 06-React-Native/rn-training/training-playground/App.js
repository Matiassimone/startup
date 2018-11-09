import { createDrawerNavigator } from 'react-navigation';

//NavigationDarner
import initialTopicsTopNavigator from './InitialTopicsNavigator';
import ScreenPosts from './src/screens/ScreenPosts';
import ScreenOnePost from './src/screens/ScreenOnePost';
import ScreenCamera from './src/screens/ScreenCamera'


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
    screen: ScreenCamera,
  }
}, {
    initialRouteName: 'InitialTopics',
});

export default AppDarnerNavigator;