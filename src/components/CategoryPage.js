import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { SearchBar } from 'react-native-elements';

export default class MainScreen extends React.Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Type Here.."
          onChangeText={this.updateSearch}
          value={search}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "flex-start"
  }
});
