import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import CategoryBox from "./CategoryBox";

const phone_width = Dimensions.get("window").width;

const categoryList = props => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <CategoryBox onItemPressed={props.onItemSelected} title={props.data[0]}/>
        <CategoryBox onItemPressed={props.onItemSelected} title={props.data[1]}/>
      </View>
      <View style={{ flexDirection: "row" }}>
      <CategoryBox onItemPressed={props.onItemSelected} title={props.data[2]}/>
      <CategoryBox onItemPressed={props.onItemSelected} title={props.data[3]}/>
      </View>
      <View style={{ flexDirection: "row" }}>
      <CategoryBox onItemPressed={props.onItemSelected} title={props.data[4]}/>
      <CategoryBox onItemPressed={props.onItemSelected} title={props.data[5]}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "95%",
    width: "100%"
  }
});
export default categoryList;
{
  /* <FlatList
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
/> */
}
