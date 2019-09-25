import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Slider, Icon } from "react-native-elements";

export default class SubSettingsContainer extends React.Component {
  state = {
    value: 20
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={this.props.onPressing}
          style={styles.buttonStyling}
        >
          <View style={{ width: "90%" }}>
            <Text style={styles.headingStyle}>{this.props.title}</Text>
          </View>
          <View>
            <Icon name="chevron-right" size={35} color="#4AAA83" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "10%",
    width: "90%",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#e4e4e4",
  },
  buttonStyling: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  headingStyle: {
    fontSize: 18,
  },
  sliderContainer: {
    flexDirection: "column",
    alignItems: "center"
  }
});
