import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import SampleText from "./SampleText";
import Carousel from "react-native-carousel-view";
import Settings from "./settings.json";
import * as Animatable from "react-native-animatable";

const phone_width = Dimensions.get("window").width;
const phone_height = Dimensions.get("window").height;
export default class FontStyles extends React.Component {
  state = {
    fontFamily: Settings.currentFontOptions,
  };

  renderFontList = () =>
    this.state.fontFamily.map(x => (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.descriptionStyling}>{x}</Text>
      </View>
    ));
  swap = (a,number) => {
    let temp = Settings.currentFontOptions[0]
    Settings.currentFontOptions[0] = Settings.currentFontOptions[number]
    Settings.currentFontOptions[number] = temp
  }
  render() {
    return (
      <View style={styles.container}>
        <Animatable.View
          animation="slideInRight"
          duration={400}
          style={styles.borderContainer}
        >
          <SampleText />
        </Animatable.View>
        <View style={{ backgroundColor: "#e4e4e4" }}>
          <Carousel
            width={phone_width}
            height={phone_height * 0.18}
            indicatorAtBottom={true}
            indicatorSize={12}
            animate={false}
            onPageChange={number => {
              Settings.currentFont = this.state.fontFamily[number];
              this.setState({ });
            }}
          >
            {this.renderFontList()}
          </Carousel>
        </View>
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
  },
  borderContainer: {
    width: "90%",
    height: "78%",
    marginTop: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#e4e4e4",
    borderTopColor: "#e4e4e4"
  },
  descriptionStyling: {
    color: "#01411cff",
    fontSize: 24
  }
});
