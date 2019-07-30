import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import ColorScheme from "./ColorScheme";
const selectColor = index => {
  return ColorScheme[index % 4];
};
const listItem = props => {
  let child = null;
  if (props.color) {
    child = (
      <View style={styles.listItem} backgroundColor={props.color}>
        <Text style={styles.item}>{props.item.key}</Text>
      </View>
    );
  } else {
    child = (
      <View style={styles.listItem} backgroundColor={selectColor(props.index)}>
        <Text style={styles.item}>{props.item.key}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={props.onItemPressed}>{child}</TouchableOpacity>
  );
};

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
