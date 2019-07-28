import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';

// importing screens
import SplashScreen from './components/SplashScreen'
import CategoryPage from './components/CategoryPage'
import SettingsScreen from './components/SettignsScreen'

export const MainStack = createBottomTabNavigator( {
  Home: {
    screen: CategoryPage
  }, 
  Settings: {
    screen: SettingsScreen
  }
})

export const MainNavigator = createStackNavigator({
  SplashScreen : {
      screen: SplashScreen,
      navigationOptions: {
        header: null
      }
  },
  MainScreen : {
    screen: MainStack,
    navigationOptions: {
      header: null
    }
  }
  
});


const App = createAppContainer(MainNavigator)

export default App
