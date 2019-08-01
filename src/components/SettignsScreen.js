import React from "react";
import { View, StyleSheet } from "react-native";
import { Header, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Animatable.View animation="slideInDown" duration={400}>
          <Header
            containerStyle={styles.headerStyle}
            leftComponent={<Icon name="settings" size={35} color="white" />}
            centerComponent={{
              text: "Settings",
              style: { color: "white", fontSize: 24 }
            }}
          />
        </Animatable.View>
        <View style={styles.fontContainer} />
        <View style={styles.colorModeContainer} />
        <View style={styles.languageChangeContainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 70,
    backgroundColor: "#11366A"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch"
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
