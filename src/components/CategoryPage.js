import React from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";

import CategoryList from "./CategoryList";

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

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.serachBarContainer}>
          <SearchBar
            inputStyle={styles.inputStyling}
            containerStyle={styles.containerStyling}
            placeholderTextColor={"#g5g5g5"}
            placeholder={"Search here"}
            inputContainerStyle={{ backgroundColor: "white" }}
            value={search}
            onChangeText={this.updateSearch}
          />
        </View>
        <CategoryList data={this.state.categoryNames} />
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
