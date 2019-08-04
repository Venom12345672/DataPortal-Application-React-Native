import React from "react";
import { View, StyleSheet } from "react-native";

import CategoryList from "./CategoryList";
import SearchItem from "./SearchItem";
import { Header, SearchBar, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";

export default class MainScreen extends React.Component {
  state = {
    search: "",
    categoryNames: [
      { key: "Devin" },
      { key: "Alice" },
      { key: "Hamzah" },
      { key: "Ramis" },
      { key: "Rania" },
      { key: "Ali" },
      { key: "Maham" },
      { key: "Minhal" },
      { key: "Umer" },
      { key: "George" },
      { key: "Tayyab" },
      { key: "Shahzaib" },
      { key: "Saadi" }
    ],
    filteredData: [],
    headerVisible: true
  };

  categorySelectedHandler = (key, color) => {
    this.props.navigation.navigate("SubCategories", {
      data: key,
      color: color
    });
  };

  renderResults = () => {
    this.setState({
      headerVisible: true,
      filteredData: []
    });
  };

  changeStateHandler = data => {
    this.setState({
      filteredData: data
    });
  };

  header = (
    <Animatable.View animation="slideInDown" duration={400}>
      <Header
        containerStyle={styles.headerStyle}
        leftComponent={<Icon name="home" color="white" size={35} />}
        centerComponent={{
          text: "Home",
          style: { color: "white", fontSize: 24 }
        }}
        rightComponent={
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

        <View style={styles.subContainer}>
          <CategoryList
            data={
              this.state.filteredData.length == 0
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
  },
  subContainer: {
    padding: 15
  },
  headerStyle: {
    height: 70,
    backgroundColor: "#01411cff"
  }
});
