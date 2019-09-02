import React, { Fragment } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import SampleText from "./SampleText";

import RadioButton from "./RadioButton";
import Settings from "./settings.json";
export default class ChangeLanguage extends React.Component {
  state = {
    textVisible: false,
    selected: ""
  };
  componentDidMount() {
    value = Settings.language;
    this.setState({ selected: value });
  }

  restartValues = value => {
    Settings.language = value;
    Settings.fontSliderValue = 1;
    Settings.lineHeightSliderValue = 1;
    Settings.currentFontNumber = 0
    if (value == "english") {
      Settings.currentSettingsEnglish = Settings.defaultEnglishSettings;
      Settings.currentLineHeightEnglish = Settings.defaultLineHeightEnglish;
      Settings.currentFontOptions = Settings.englishFonts;
      Settings.currentFont = Settings.currentFontOptions[0];
    } else if (value == "urdu") {
      Settings.currentSettingsUrdu = Settings.defaultUrduSettings;
      Settings.currentLineHeightUrdu = Settings.defaultLineHeightUrdu;
      Settings.currentFontOptions = Settings.urduFonts;
      Settings.currentFont = Settings.currentFontOptions[0];
    }
  };

  radioButtonHandler = value => {
    this.restartValues(value);
    this.setState({ selected: value, textVisible: true });
  };
  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          {this.state.textVisible ? (
            <View style={styles.borderContainer}>
              <Animatable.View animation="slideInDown" duration={1000}>
                <SampleText />
              </Animatable.View>
            </View>
          ) : null}
          <View style={styles.languageContainer}>
            <RadioButton
              value="english"
              selected={this.state.selected}
              title="English"
              selectionHandler={this.radioButtonHandler}
            />
            <RadioButton
              value="urdu"
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
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center"
  },
  languageContainer: {
    height: "22%",
    width: "90%",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e4e4e4"
  },
  borderContainer: {
    width: "90%",
    height: "78%",
    marginTop: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#e4e4e4",
    borderTopColor: "#e4e4e4"
  }
});
