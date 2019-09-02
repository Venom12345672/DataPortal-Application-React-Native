import React from "react";
import { Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

// importing screens
import SplashScreen from "./components/SplashScreen";
import CategoryPage from "./components/CategoryPage";
import SettingsScreen from "./components/SettignsScreen";
import SubCategoryPage from "./components/SubCategoryPage";
import FontSettings from "./components/FontSettings";
import ChangeLanguage from "./components/ChangeLanguage";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import FontStyles from "./components/FontStyles"
export const MainStack = createBottomTabNavigator({
  Home: {
    screen: CategoryPage
  },
  Settings: {
    screen: SettingsScreen
  }
});

export const MainNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  MainScreen: {
    screen: MainStack,
    navigationOptions: {
      header: null
    }
  },
  SubCategories: {
    screen: SubCategoryPage,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#01411cff"
      },
      headerTintColor: "white"
    }
  },
  FontSettings: {
    screen: FontSettings,
    navigationOptions: {
      title: "Font Size",
      headerStyle: {
        backgroundColor: "#01411cff"
      },
      headerTintColor: "white"
    }
  },
  ChangeLanguage: {
    screen: ChangeLanguage,
    navigationOptions: {
      title: "Content Language",
      headerStyle: {
        backgroundColor: "#01411cff"
      },
      headerTintColor: "white"
    }
  },
  Section1: {
    screen: Section1,
    navigationOptions: {
      title: "Section 1",
      headerStyle: {
        backgroundColor: "#01411cff"
      },
      headerTintColor: "white"
    }
  },
  Section2: {
    screen: Section2,
    navigationOptions: {
      title: "Section 2",
      headerStyle: {
        backgroundColor: "#01411cff"
      },
      headerTintColor: "white"
    }
  },
  FontStyles: {
    screen: FontStyles,
    navigationOptions: {
      title: "Font Styles",
      headerStyle: {
        backgroundColor: "#01411cff"
      },
      headerTintColor: "white"
    }
  }
});

const App = createAppContainer(MainNavigator);

export default App;
