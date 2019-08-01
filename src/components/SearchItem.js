import React from "react";
import { View, StyleSheet, TextInput, Keyboard } from "react-native";
import { SearchBar, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";

export default class SearchItem extends React.Component {
  state = {
    search: "",
    searchBarFocused: false
  };

  searchHandler = search => {
    this.setState({ search: search });

    let data = this.props.data;
    let filtering = [];
    if (search != "") {
      console.log("hamzah");
      filtering = data.filter(item => item.key.includes(search));
    } else {
      filtering = [];
    }
    this.props.changeState(filtering);
  };

  searchIcon = (
    <Animatable.View animation="fadeInRight" duration={400}>
      <Icon name="search" size={30} />
    </Animatable.View>
  );

  cancelIcon = (
    <Animatable.View animation="fadeInLeft" duration={400}>
      <Icon name="arrow-back" size={30} onPress={() => Keyboard.dismiss()} />
    </Animatable.View>
  );

  homeIcon = (
    <Animatable.View animation="slideInRight" duration={400}>
      <Icon
        name="home"
        size={30}
        color="white"
        onPress={this.props.backtoHome}
      />
    </Animatable.View>
  );

  render() {
    const { search } = this.state;

    return (
      <View style={styles.mainContainer}>
        <Animatable.View
          animation="slideInRight"
          duration={400}
          style={styles.searchContainer}
        >
          {this.state.searchBarFocused ? this.cancelIcon : this.searchIcon}
          <TextInput
            placeholder="Search.."
            style={styles.textInputStyling}
            value={search}
            onChangeText={this.searchHandler}
            onFocus={() => this.setState({ searchBarFocused: true })}
            onBlur={() => this.setState({ searchBarFocused: false })}
          />
        </Animatable.View>
        {this.homeIcon}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 70,
    backgroundColor: "#11366A",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5
  },
  searchContainer: {
    height: 40,
    backgroundColor: "white",
    flexDirection: "row",
    width: "90%",
    left: 0,
    paddingHorizontal: 5,
    alignItems: "center"
  },
  textInputStyling: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1
  }
});
