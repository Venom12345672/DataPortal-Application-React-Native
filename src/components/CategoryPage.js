import React from "react";
import { View, StyleSheet } from "react-native";

import CategoryList from "./CategoryList";
import SearchItem from "./SearchItem";
import { Header } from "react-native-elements";

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
    ],
    isVisible: false
  };

  categorySelectedHandler = (key, color) => {
    this.props.navigation.navigate("SubCategories", {
      data: key,
      color: color
    });
  };

  renderResults = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  header = (
    <Header
      containerStyle={styles.headerStyle}
      leftComponent={{ icon: "home", color: "#fff" }}
      centerComponent={{
        text: "Home",
        style: { color: "white", fontSize: 24 }
      }}
      rightComponent={{ icon: "search", color: "#fff", onPress: this.renderResults }}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {/* <SearchItem /> */}
        {this.state.isVisible ? <SearchItem /> : this.header}
        <View style={styles.subContainer}>
          <CategoryList
            data={this.state.categoryNames}
            onItemSelected={this.categorySelectedHandler}
            color={null}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch"
  },
  subContainer: {
    padding: 15
  },
  headerStyle: {
    height: 70
  }
});
