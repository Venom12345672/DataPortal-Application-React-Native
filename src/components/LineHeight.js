import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Settings from "./settings.json";
import { Slider } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class LineHeight extends React.Component {
  state = {
    values: ["Small", "Default", "Medium", "Large", "XL"]
  };
  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={{ width: 300 }}
          step={1}
          minimumValue={0}
          maximumValue={4}
          value={Settings.lineHeightSliderValue}
          thumbTintColor="#275EA8"
          minimumTrackTintColor="#01411cff"
          onValueChange={this.props.lineHeightChange}
        />
        <View style={styles.textCon}>
          <Icon name="text-height" size={18} color={"black"} />
          <Text style={styles.colorYellow}>
            {this.state.values[Settings.lineHeightSliderValue]}
          </Text>

          <Icon name="text-height" size={28} color={"black"} />
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
