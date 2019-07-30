import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import ColorScheme from "./ColorScheme";

const categoryList = props => {
  return (
    <FlatList
      style={styles.listContainter}
      data={props.data}
      renderItem={({ item, index }) => {
        return (
          <ListItem
            index={index}
            item={item}
            color = {props.color}
            onItemPressed={() =>
              props.onItemSelected(item.key, ColorScheme[index % 4])
            }
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  listContainter: {
    width: "100%"
  }
});
export default categoryList;
