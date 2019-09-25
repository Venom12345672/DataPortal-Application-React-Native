import React from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { Icon } from "react-native-elements";

// importing screens
import SplashScreen from "./components/SplashScreen";
import CategoryPage from "./components/CategoryPage";
import SettingsScreen from "./components/SettignsScreen";
import SubCategoryPage from "./components/SubCategoryPage";
import FontSettings from "./components/FontSettings";
import ChangeLanguage from "./components/ChangeLanguage";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import FontStyles from "./components/FontStyles";
export const MainStack = createBottomTabNavigator(
  {
    Home: CategoryPage,
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        // let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = 'home';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === "Settings") {
          iconName = `settings`;
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={27} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

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
        backgroundColor: "#4AAA83"
      },
      headerTintColor: "white"
    }
  },
  FontSettings: {
    screen: FontSettings,
    navigationOptions: {
      title: "Font Size",
      headerStyle: {
        backgroundColor: "#4AAA83"
      },
      headerTintColor: "white"
    }
  },
  ChangeLanguage: {
    screen: ChangeLanguage,
    navigationOptions: {
      title: "Content Language",
      headerStyle: {
        backgroundColor: "#4AAA83"
      },
      headerTintColor: "white"
    }
  },
  Section1: {
    screen: Section1,
    navigationOptions: {
      title: "Section 1",
      headerStyle: {
        backgroundColor: "#4AAA83"
      },
      headerTintColor: "white"
    }
  },
  Section2: {
    screen: Section2,
    navigationOptions: {
      title: "Section 2",
      headerStyle: {
        backgroundColor: "#4AAA83"
      },
      headerTintColor: "white"
    }
  },
  FontStyles: {
    screen: FontStyles,
    navigationOptions: {
      title: "Font Styles",
      headerStyle: {
        backgroundColor: "#4AAA83"
      },
      headerTintColor: "white"
    }
  }
});

const App = createAppContainer(MainNavigator);

export default App;
