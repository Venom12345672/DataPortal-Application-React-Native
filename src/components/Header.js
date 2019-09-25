import React from "react";
import { View, StyleSheet, Text, Keyboard } from "react-native";
import { Icon } from "react-native-elements";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        {this.props.leftComponent}
        {this.props.rightComponenet}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 60,
    backgroundColor: "#4AAA83",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10
  }
});
