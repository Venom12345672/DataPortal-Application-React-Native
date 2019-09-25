import React, { Fragment } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import SampleText from "./SampleText";
import Carousel from "react-native-carousel-view";
import Settings from "./settings.json";
import * as Animatable from "react-native-animatable";
import { Icon } from "react-native-elements";

const phone_width = Dimensions.get("window").width;
const phone_height = Dimensions.get("window").height;
export default class FontStyles extends React.Component {
  state = {
    fontFamily: Settings.currentFontOptions
  };

  componentWillUnmount() {
    Settings.currentFontOptions.map((x, index) => {
      if (x == Settings.currentFont) {
        this.swap(index);
      }
    });
  }
  font = (left, right, x, index) => (
    <View style={styles.listStyling}>
      <Icon name="chevron-left" size={50} color={left} />
      <Text
        style={[
          styles.descriptionStyling,
          { fontFamily: this.state.fontFamily[index] }
        ]}
      >
        {x}
      </Text>
      <Icon name="chevron-right" size={50} color={right} />
    </View>
  );

  renderFontList = () =>
    this.state.fontFamily.map((x, index) => {
      if (index == 0) {
        return this.font("white","#4AAA83", x, index);
      } else if (index == this.state.fontFamily.length - 1) {
        return this.font("#4AAA83", "white", x, index);
      } else {
        return this.font("#4AAA83", "#4AAA83", x, index);
      }
    });
  swap = number => {
    let temp = Settings.currentFontOptions[0];
    Settings.currentFontOptions[0] = Settings.currentFontOptions[number];
    Settings.currentFontOptions[number] = temp;
  };
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
        <View>
          <Carousel
            width={phone_width}
            height={phone_height * 0.18}
            indicatorAtBottom={true}
            indicatorSize={12}
            animate={false}
            onPageChange={number => {
              Settings.currentFont = this.state.fontFamily[number];
              this.setState({});
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
  },
  listStyling: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  }
});
