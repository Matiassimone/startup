import { createDrawerNavigator } from 'react-navigation';

//NavigationDarner
import initialTopicsTopNavigator from './InitialTopicsNavigator';
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
  }
}, {
    initialRouteName: 'InitialTopics',
});

export default AppDarnerNavigator;