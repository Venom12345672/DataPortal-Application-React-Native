import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const selectColor = index => {
  if (index % 4 == 0) {
    return "#90AFC5";
  } else if (index % 4 == 1) {
    return "#336B87";
  } else if (index % 4 == 2) {
    return "#2A3132";
  } else if (index % 4 == 3) {
    return "#763623";
  }
};
const listItem = props => (
  <TouchableOpacity>
    <View style={styles.listItem} backgroundColor={selectColor(props.index)}>
      <Text style={styles.item}>{props.item.key}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    height: 150,
    borderRadius: 5
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 50,
    color: "white"
  }
});

export default listItem;
