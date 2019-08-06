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
    data = Settings.currentSettings;
    value = Settings.fontSliderValue;
    this.setState({ currentSettings: data, fontSliderValue: value });
  }
  fontChnageHandler = cond => {
    Settings.currentSettings = Settings.fontSize[cond];
    Settings.fontSliderValue = cond;
    this.setState({
      currentSettings: Settings.fontSize[cond],
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
