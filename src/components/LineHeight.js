import React from "react";
import { Text, View, StyleSheet, Slider } from "react-native";
import MarkSlider from "react-native-mark-slider";
import Settings from "./settings.json";
export default class LineHeight extends React.Component {
  render() {
    const marks = [
      { name: "Small", value: 0 },
      { name: "Default", value: 1 },
      { name: "Medium", value: 2 },
      { name: "Large", value: 3 },
      { name: "XL", value: 4 }
    ];
    return (
      <View style={styles.sliderContainer}>
        <MarkSlider
          style={{ width: "100%", height: 50, alignSelf: "center" }}
          step={1}
          value={Settings.lineHeightSliderValue}
          max={4}
          min={0}
          marks={marks}
          minimumTrackTintColor="#01411cff"
          maximumTrackTintColor="grey"
          onChange={this.props.lineHeightChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: "100%",
    height: "100%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: 10,
    borderBottomColor: "#e4e4e4",
    borderTopColor: "#e4e4e4",
    alignContent: "center",
    justifyContent: "center"
  },
  
});
