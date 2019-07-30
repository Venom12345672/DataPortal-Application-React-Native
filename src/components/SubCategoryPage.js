import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";

import CategoryList from "./CategoryList";
export default class SubCategoryPage extends React.Component {
  state = {
    categoryNames: [
      { key: "Alice" },
      { key: "Alice" },
      { key: "Alice" },
      { key: "Alice" },
      { key: "Alice" },
      { key: "Alice" },
      { key: "Alice" },
      { key: "Alice" },
      { key: "Alice" },
      { key: "Alice" },
      { key: "Alice" }
    ]
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("data")
    };
  };

  categorySelectedHandler = key => {
    alert(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <CategoryList
          data={this.state.categoryNames}
          onItemSelected={this.categorySelectedHandler}
          color={this.props.navigation.state.params.color}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
