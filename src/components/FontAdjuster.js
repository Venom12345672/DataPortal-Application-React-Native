import React from "react";
import { Text, View, StyleSheet, Slider } from "react-native";
import MarkSlider from "react-native-mark-slider";

export default class FontAdjuster extends React.Component {

  render() {
    const marks = [
      { name: "Small", value: 0 },
      { name: "Default", value: 1 },
      { name: "Medium", value: 2 },
      { name: "Large", value: 3 },
      { name: "XL", value: 4 }
    ];
    return (
      <View style={styles.borderContainer}>
        <View style={styles.sliderContainer}>
          <MarkSlider
            style={{width:'100%',height:50,alignSelf: 'center',}}
            step={1}
            value={1}
            max={4}
            min={0}
            marks={marks}
            minimumTrackTintColor="#01411cff"
            maximumTrackTintColor="grey"
            onChange={this.props.fontChange}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={{ fontSize: 14, color: "grey" }}>
            Move the slider to adjust the font size.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  borderContainer: {
    width: "90%",
    height: "20%"
  },
  sliderContainer: {
    width: "100%",
    height: "50%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: 10,
    borderBottomColor: "#e4e4e4",
    borderTopColor: "#e4e4e4",
    alignContent: "center",
    justifyContent: "center"
  },
  descriptionContainer: {
    width: "100%",
    height: "50%",
    paddingTop:5
  }
});
