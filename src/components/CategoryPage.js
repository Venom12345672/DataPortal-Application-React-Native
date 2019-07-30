import React from "react";
import { View, StyleSheet } from "react-native";

import CategoryList from "./CategoryList";
import SearchItem from "./SearchItem";

export default class MainScreen extends React.Component {
  state = {
    search: "",
    categoryNames: [
      { key: "Devin" },
      { key: "Devin" },
      { key: "Devin" },
      { key: "Devin" },
      { key: "Devin" },
      { key: "Devin" },
      { key: "Devin" },
      { key: "Devin" },
      { key: "Devin" },
      { key: "Devin" },
      { key: "Devin" },
      { key: "Devin" },
      { key: "Devin" }
    ]
  };

  categorySelectedHandler = (key,color) => {
    this.props.navigation.navigate("SubCategories",{data: key, color: color})
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchItem />
        <CategoryList
          data={this.state.categoryNames}
          onItemSelected={this.categorySelectedHandler}
          color = {null}
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
  },
  serachBarContainer: {
    width: "100%"
  },
  inputStyling: {
    backgroundColor: "white",
    fontSize: 15
  },
  containerStyling: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    height: 50
  }
});
