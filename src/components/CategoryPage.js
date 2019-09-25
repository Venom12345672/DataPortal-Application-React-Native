import React from "react";
import { View, StyleSheet, Text } from "react-native";

import CategoryList from "./CategoryList";
import SearchItem from "./SearchItem";
import { Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import Header from "./Header";
export default class MainScreen extends React.Component {
  state = {
    search: "",
    categoryNames: [
      "Dyslexia",
      "Alzheimer's",
      "Autism",
      "Schizophrenia",
      "Epilepsy",
      "ADHD"
    ],
    filteredData: [],
    headerVisible: true
  };

  categorySelectedHandler = (index) => {
    this.props.navigation.navigate("SubCategories", {
      data: this.state.categoryNames[index]
    });
  };

  renderResults = () => {
    this.setState({
      headerVisible: true,
      filteredData: []
    });
  };

  changeStateHandler = data => {
    this.setState({ filteredData: data });
  };

  header = (
    <Animatable.View animation="slideInDown" duration={400}>
      <Header
        leftComponent={
          <Text style={{ paddingHorizontal: 10, color: "white", fontSize: 24 }}>
            Home
          </Text>
        }
        rightComponenet={
          <Icon
            name="search"
            color="white"
            size={35}
            onPress={() => this.setState({ headerVisible: false })}
          />
        }
      />
    </Animatable.View>
  );

  search = (
    <SearchItem
      data={this.state.categoryNames}
      changeState={this.changeStateHandler}
      backtoHome={this.renderResults}
    />
  );
  render() {
    return (
      <View style={styles.container}>
        {this.state.headerVisible ? this.header : this.search}

        <View>
          <CategoryList
            data={
              this.state.headerVisible
                ? this.state.categoryNames
                : this.state.filteredData
            }
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
  }
});
