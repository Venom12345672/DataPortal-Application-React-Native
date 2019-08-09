import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Slideshow from "react-native-image-slider-show";

export default class Section1 extends React.Component {
  render() {
    return (
      <Slideshow
        dataSource={[
          { url: "http://placeimg.com/640/480/any" },
          { url: "http://placeimg.com/640/480/any" },
          { url: "http://placeimg.com/640/480/any" }
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center"
  },
  scrollContainer: {
    width: "100%",
    height: "100%"
  },
  contentTextStyle: { textAlign: "justify", padding: 10 }
});

{
  /* <Text style={styles.contentTextStyle}>
            Hello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
            World
          </Text> */
}
