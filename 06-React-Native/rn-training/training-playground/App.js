import React from 'react';
import { SafeAreaView} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation'

import ScreenTopicOne from './src/screens/ScreenTopicOne';
import ScreenTopicTwo from './src/screens/ScreenTopicTwo';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <AppTabNavigator></AppTabNavigator>
      </SafeAreaView>
    );
  }
}

const AppTabNavigator = createMaterialTopTabNavigator ({

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
