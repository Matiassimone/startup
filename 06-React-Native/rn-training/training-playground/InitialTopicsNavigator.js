import { createMaterialTopTabNavigator } from 'react-navigation'

//NavigationTabs
import ScreenTopicOne from './src/screens/ScreenTopicOne';
import ScreenTopicTwo from './src/screens/ScreenTopicTwo';
import ScreenTopicThree from './src/screens/ScreenTopicThree';


export default initialTopicsTopNavigator = createMaterialTopTabNavigator ({

  TopicOne: {
    screen: ScreenTopicOne,
    navigationOptions: {
      tabBarLabel: 'Topic One'
    }
  },

  TopicTwo: {
    screen: ScreenTopicTwo,
    navigationOptions: {
      tabBarLabel: 'Topic Two'
    }
  },

  TopicThree: {
    screen: ScreenTopicThree,
    navigationOptions: {
      tabBarLabel: 'Topic Three'
    }
  }
},{
    initialRouteName: 'TopicOne',
    tabBarOptions: {
      activeTintColor: '#FF1654',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#f2f2f2'
      },
      indicatorStyle: {
        height: 0
      }
    }
});


