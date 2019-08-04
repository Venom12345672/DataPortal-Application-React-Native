import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

export default class LightDarkMode extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.headingStyle}>Color Mode</Text>
        <View style={styles.colorModeContainer}>
          <Button title="Dark Mode" onPress={this.props.toggleMode} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    height: "25%",
    backgroundColor: "#eee",
    flexDirection: "column"
  },
  headingStyle: {
    fontWeight: "bold",
    fontSize: 24,
    padding: 13
  },
  colorModeContainer: {
    flexDirection: "column",
    alignItems: "center"
  }
});
