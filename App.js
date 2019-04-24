import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './components/Home';
import Profile from './components/Profile';
import Feed from './components/Feed';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack=createStackNavigator({
  Home:Home,
  Profile:Profile,
  Feed:Feed,
})

const Apps = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <Home/>;
//   }
// }

export default Apps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
