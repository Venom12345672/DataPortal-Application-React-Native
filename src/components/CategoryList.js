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
        <CategoryBox
          onItemPressed={()=>props.onItemSelected(0)}
          title={props.data[0]}
          img="Dyslexia"
        />
        <CategoryBox
          onItemPressed={()=>props.onItemSelected(1)}
          title={props.data[1]}
          img="Alzheimer"
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <CategoryBox
          onItemPressed={()=>props.onItemSelected(2)}
          title={props.data[2]}
          img="Autism"
        />
        <CategoryBox
          onItemPressed={()=>props.onItemSelected(3)}
          title={props.data[3]}
          img="Schizophrenia"
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <CategoryBox
          onItemPressed={()=>props.onItemSelected(4)}
          title={props.data[4]}
          img="Epilepsy"
        />
        <CategoryBox
          onItemPressed={()=>props.onItemSelected(5)}
          title={props.data[5]}
          img="ADHD"
        />
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
