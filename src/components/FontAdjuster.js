import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "react-native";
import MarkSlider from "react-native-mark-slider";
import { Slider } from "react-native-elements";

import Settings from "./settings.json";
export default class FontAdjuster extends React.Component {
  state= {
    values : ['Small','Default','Medium','Large','XL']
  }
  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={{ width: 300 }}
          step={1}
          minimumValue={0}
          maximumValue={4}
          value={Settings.fontSliderValue}
          thumbTintColor="#275EA8"
          minimumTrackTintColor="#01411cff"
          onValueChange={this.props.fontChange}
        />
        <View style={styles.textCon}>
          <Text style={[styles.colorGrey, { fontSize: 18 }]}>A</Text>
          <Text style={styles.colorYellow}>{this.state.values[Settings.fontSliderValue]}</Text>
          <Text style={[styles.colorGrey, { fontSize: 29 }]}>A</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#e4e4e4"
  },
  textCon: {
    width: 320,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  colorGrey: {
    color: "black"
  },
  colorYellow: {
    color: "#01411cff",
    fontSize: 20
}
});
