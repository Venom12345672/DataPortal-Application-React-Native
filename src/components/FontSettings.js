import React from "react";
import { Text, View, StyleSheet } from "react-native";

import SampleText from "./SampleText";
import FontAdjuster from "./FontAdjuster";
import FontSizes from './fontSizes'
export default class FontSettings extends React.Component {
  state = {
    currentSettings: [14, 16, 20, 26]
  };

  fontChnageHandler = cond => {
   this.setState({currentSettings: FontSizes[cond]})
  };
  render() {
    return (
      <View style={styles.container}>
        <SampleText currentSettings={this.state.currentSettings} />
        <FontAdjuster fontChange={this.fontChnageHandler} />
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
