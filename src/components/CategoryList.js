import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from '../components/ListItem'

renderItem = ({ item, index }) => {
    
    return (
     <ListItem
        index = {index}
        item = {item}
     />
    );
  };
  
const categoryList = props => {
  return (
    <FlatList
      style={styles.listContainter}
      data={props.data}
      renderItem={this.renderItem}
    />
  );
};

const styles = StyleSheet.create({
  listContainter: {
    width: "100%"
  }
});
export default categoryList;
