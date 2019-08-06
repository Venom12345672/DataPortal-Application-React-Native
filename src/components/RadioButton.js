import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class RadioButton extends React.Component {


  render() {
    const { selected } = this.props;
    const { value } = this.props;
    return (
      <TouchableOpacity style={styles.mainContainer} onPress={() => {this.props.selectionHandler(value)}}>
        <View style={{ width: "95%" }}>
          <Text style={styles.headingStyle}>{this.props.title}</Text>
        </View>
        <View>
          <View style={styles.circleContainer}>
            {selected == value ? <View style={styles.filledColor} /> : null}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "10%",
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center"
  },
  circleContainer: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "center"
  },
  filledColor: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#000"
  },
  headingStyle: {
    fontSize: 16
  }
});
