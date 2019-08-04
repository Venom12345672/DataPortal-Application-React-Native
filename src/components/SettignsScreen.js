import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import FontContainer from "./FontContainer";
import LightDarkMode from "./LightDarkMode";

import Header from "./Header";
export default class MainScreen extends React.Component {
  fontSettignsHandler = () => {
    this.props.navigation.navigate("FontSettings");
  };

  render() {
    return (
      <View style={styles.container}>
        <Animatable.View animation="slideInDown" duration={400}>
          <Header
            leftComponent={
              <Text style={{ color: "white", fontSize: 24 }}>Settings</Text>
            }
            rightComponenet={<Icon name="settings" color="white" size={35} />}
          />
        </Animatable.View>
        <View style={styles.settingsOptionContainer}>
          <FontContainer goToFont={this.fontSettignsHandler} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch"
  },
  settingsOptionContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center"
  }
});
