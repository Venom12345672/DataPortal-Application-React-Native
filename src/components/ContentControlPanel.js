import React, { Component } from "react";
import { View, Dimensions, StyleSheet } from "react-native";

import SlidingUpPanel from "rn-sliding-up-panel";
import Carousel from "react-native-carousel-view";
import FontAdjuster from "./FontAdjuster";
import LineHeight from "./LineHeight";
import Settings from "./settings.json";
import FontContrastSelection from "./FontContrastSelection";
const phone_width = Dimensions.get("window").width;
const phone_height = Dimensions.get("window").height;
const drawer_height = phone_height * 0.3;
export default class Section1 extends Component {
  state = {
    currentSettings: [],
    currentLineHeight: 0,
    fontSliderValue: 1,
    lineHeightValue: 1
  };

  componentDidMount() {
    data = null;
    data2 = null;
    if (Settings.language == "english") {
      data = Settings.currentSettingsEnglish;
      data2 = Settings.currentLineHeightEnglish;
    } else if (Settings.language == "urdu") {
      data = Settings.currentSettingsUrdu;
    }
    value = Settings.fontSliderValue;
    value2 = Settings.lineHeightSliderValue;
    this.setState({
      currentSettings: data,
      currentLineHeight: data2,
      fontSliderValue: value,
      lineHeightValue: value2
    });
  }

  fontChnageHandler = cond => {
    data = null;
    if (Settings.language == "english") {
      data = Settings.fontSizeEnglish[cond];
      Settings.currentSettingsEnglish = data;
    } else if (Settings.language == "urdu") {
      data = Settings.fontSizeUrdu[cond];
      Settings.currentSettingsUrdu = data;
    }
    Settings.fontSliderValue = cond;
    this.setState({
      currentSettings: data,
      fontSliderValue: cond
    });
    this.props.refreshContent();
  };

  lineHeightChangeHandler = cond => {
    data = null;
    if (Settings.language == "english") {
      data = Settings.lineHeightEnglish[cond];
      Settings.currentLineHeightEnglish = data;
    } else if (Settings.language == "urdu") {
      data = Settings.lineHeighturdu[cond];
      Settings.currentLineHeightUrdu = data;
    }
    Settings.lineHeightSliderValue = cond;
    this.setState({
      currentLineHeight: data,
      lineHeightValue: cond
    });
    this.props.refreshContent();
  };
  renderFontContrast = () =>
    Settings.fontContrast.map(colors => {
      return (
        <FontContrastSelection
          backgroundColor={colors[0]}
          fontColor={colors[1]}
          refresh = {this.props.refreshContent}
        />
      );
    });
  render() {
    return (
      <SlidingUpPanel
        ref={c => (this._panel = c)}
        draggableRange={{ top: drawer_height, bottom: 10 }}
        height={drawer_height}
      >
        <View style={styles.slidingContainer}>
          <Carousel
            width={phone_width * 0.9}
            height={drawer_height}
            indicatorAtBottom={true}
            indicatorSize={12}
            animate={false}
          >
            <View>
              <FontAdjuster fontChange={this.fontChnageHandler} />
            </View>
            <View>
              <LineHeight lineHeightChange={this.lineHeightChangeHandler} />
            </View>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                width: "50%"
              }}
            >
              {this.renderFontContrast()}
            </View>
          </Carousel>
        </View>
      </SlidingUpPanel>
    );
  }
}

const styles = StyleSheet.create({
  slidingContainer: {
    flex: 1,
    backgroundColor: "#e4e4e4",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  },
  textCon: {
    width: 320,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  colorGrey: {
    color: "black"
  },
  colorYellow: {
    color: "black"
  }
});
