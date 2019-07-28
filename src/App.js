import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';



export const MainNavigator = createStackNavigator({
  SplashScreen : {
      screen: SplashScreen
  },
  
});


const App = createAppContainer(MainNavigator)
