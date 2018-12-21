import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator ,createAppContainer} from 'react-navigation';
import AuthScreen from './src/screens/AuthScreen/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
export default class App extends React.Component {
  render() {
    const TabNavigator = createBottomTabNavigator({
      Welcome :{
        screen : WelcomeScreen
      },
      Auth:{
        screen: AuthScreen
      }
    });


    const MainNavigator = createAppContainer(TabNavigator);

    return (

        <MainNavigator/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
