import React from "react";
import { Text, View, StyleSheet } from "react-native";

import SampleText from "./SampleText";
import FontAdjuster from "./FontAdjuster";
import Settings from "./settings.json";
export default class FontSettings extends React.Component {
  state = {
    currentSettings: [],
    fontSliderValue: 1
  };

  componentDidMount() {
    data = null
    if (Settings.language == "english") {
      data = Settings.currentSettingsEnglish;
    } else if (Settings.language == "urdu") {
      data = Settings.currentSettingsUrdu;
    }
    value = Settings.fontSliderValue;
    this.setState({ currentSettings: data, fontSliderValue: value });
  }
  fontChnageHandler = cond => {
    data = null
    if (Settings.language == "english") {
      data = Settings.fontSizeEnglish[cond];
      Settings.currentSettingsEnglish = data
    } else if (Settings.language == "urdu") {
      data = Settings.fontSizeUrdu[cond];
      Settings.currentSettingsUrdu = data
    }
    Settings.fontSliderValue = cond
    this.setState({
      currentSettings: data,
      fontSliderValue: cond
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <SampleText />
        <FontAdjuster
          fontChange={this.fontChnageHandler}
          sliderValue={this.state.fontSliderValue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center"
  }
});
