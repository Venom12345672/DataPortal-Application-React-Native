import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { Header } from "react-native-elements";
import { Icon } from 'react-native-elements'

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          outerContainerStyles = {{height: 0}}
          leftComponent={{ icon: "settings", color: "#fff"}}
          centerComponent={{ text: "Settings", style: { color: "white", fontSize: 24} }}
        />
        <View style={styles.fontContainer} />
        <View style={styles.colorModeContainer} />
        <View style={styles.languageChangeContainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch"
    // justifyContent: "center"
  },
  fontContainer: {
    marginTop: 20,
    height: "25%",
    backgroundColor: "#eee"
  },
  colorModeContainer: {
    marginTop: 20,
    height: "25%",
    backgroundColor: "#eee"
  },
  languageChangeContainer: {
    marginTop: 20,
    height: "25%",
    backgroundColor: "#eee"
  }
});
