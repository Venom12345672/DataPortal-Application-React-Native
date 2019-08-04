import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Slider } from "react-native-elements";

export default class FontContainer extends React.Component {
  state = {
    value: 20
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.headingStyle}>Font Size </Text>
        <View style={styles.sliderContainer}>
          <Slider
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
            thumbTintColor="white"
            thumbStyle={{ width: 30, height: 30 }}
            style={{ width: "90%" }}
            maximumValue={24}
            minimumValue={18}
            minimumTrackTintColor="#01411cff"
            step={1}
          />
          <Text
            style={{
              fontSize: this.state.value,
              fontFamily: "Times New Roman"
            }}
          >
            Lorem Ipsum
          </Text>
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
  sliderContainer: {
    flexDirection: "column",
    alignItems: "center"
  }
});
