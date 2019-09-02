import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView
} from "react-native";
import Carousel from "react-native-carousel-view";

import SampleText from "./SampleText";
import FontAdjuster from "./FontAdjuster";
import LineHeight from "./LineHeight";
import Settings from "./settings.json";
import RadioButton from "./RadioButton";
const phone_width = Dimensions.get("window").width;
const phone_height = Dimensions.get("window").height;
export default class FontSettings extends React.Component {
  state = {
    // currentSettings: [],
    // currentLineHeight: 0,
    // fontSliderValue: 1,
    // lineHeightValue: 1
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
    // this.setState({
    //   currentSettings: data,
    //   currentLineHeight: data2,
    //   fontSliderValue: value,
    //   lineHeightValue: value2
    // });
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
    // this.setState({
    //   currentSettings: data,
    //   fontSliderValue: cond
    // });
    this.setState({})
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
    // this.setState({
    //   currentLineHeight: data,
    //   lineHeightValue: cond
    // });
    this.setState({})
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.borderContainer}>
          <SampleText />
        </View>
        <View >
          <Carousel
            width={phone_width}
            height={phone_height * 0.18}
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
  }
});
