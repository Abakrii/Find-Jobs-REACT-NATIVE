import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator ,createAppContainer , createStackNavigator} from 'react-navigation';
import AuthScreen from './src/screens/AuthScreen/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import MapScreen from "./src/screens/MapScreen/MapScreen";
import DeckScreen from './src/screens/DeckScreen/DeckScreen';
import ReviewScreen from "./src/screens/ReviewScreen/ReviewScreen";
import SettingScreen from "./src/screens/SettingScreen/SettingScreen";
export default class App extends React.Component {

  render() {
    const TabNavigator = createBottomTabNavigator({
      Welcome :{
        screen : WelcomeScreen
      },
      Auth:{
        screen: AuthScreen
      },
      Main :{
        screen : createBottomTabNavigator({
          Map: {
            screen : MapScreen
          },
          Deck : {
            screen : DeckScreen
          },
          Review :{
            screen : createStackNavigator({
              Review:{
                screen : ReviewScreen
              },
              Settings:{
                screen : SettingScreen
              }
            })
          }
        })
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
