import React from "react";
import { View, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

export default class SearchItem extends React.Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
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
    );
  }
}

const styles = StyleSheet.create({
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
