import React, { Component } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import Settings from "./settings.json";
export default class FontContrastSelction extends React.Component {
  state = {
    selected: false
  };
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          (Settings.currentContrast[0] = this.props.backgroundColor),
            (Settings.currentContrast[1] = this.props.fontColor);
          this.setState({ selected: true });
          this.props.refresh();
        }}
      >
        <View
          style={[
            styles.container,
            { backgroundColor: this.props.backgroundColor }
          ]}
        >
          <Text
            style={[styles.textDescription, { color: this.props.fontColor }]}
          >
            Aa
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  textDescription: {
    fontSize: 30,
    fontStyle: "italic",
    fontFamily: "Caslon"
  },
  selectedContainer: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 10
  }
});
