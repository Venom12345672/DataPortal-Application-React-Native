import React, { Fragment } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import SampleText from "./SampleText";
import RadioButton from "./RadioButton";
export default class ChangeLanguage extends React.Component {
  state = {
    textVisible: false,
    selected: "first"
  };

  radioButtonHandler = value => {
    this.setState({ selected: value, textVisible: true});
  };
  render() {
    return (
      <Fragment>
        <View style={{ height: "80%", width: "100%", alignItems: "center" }}>
          {this.state.textVisible ? (
            <Animatable.View animation="slideInDown" duration={600}>
              <SampleText />
            </Animatable.View>
          ) : null}
          <View style={styles.languageContainer}>
            <RadioButton
              value="first"
              selected={this.state.selected}
              title="English"
              selectionHandler={this.radioButtonHandler}
            />
            <RadioButton
              value="second"
              selected={this.state.selected}
              title="Urdu"
              selectionHandler={this.radioButtonHandler}
            />
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    height: "100%"
  },
  languageContainer: {
    height: "100%",
    width: "90%",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e4e4e4",
    flexDirection: "column",
    alignItems: "center",
  }
});
