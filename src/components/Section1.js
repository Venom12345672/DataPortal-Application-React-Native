import React, { Fragment } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  ToastAndroid
} from "react-native";

const phone_width = Dimensions.get("window").width;
import Settings from "./settings.json";
import Carousel from "react-native-carousel-view";
import ToggleSwitch from "toggle-switch-react-native";
import { sectionStyles } from "./SectionStyling";
import Icon from "react-native-vector-icons/Foundation";
import ContentControlPanel from "./ContentControlPanel";
import Sound from "react-native-sound";

export default class Section1 extends React.Component {
  sound = [
    new Sound("tone_1.mp3"),
    new Sound("tone_2.mp3"),
    new Sound("tone_3.mp3"),
    new Sound("tone_4.mp3")
  ];

  // playSound = () => {
  //   this.sound.play();
  // };

  state = {
    nightMode: false,
    longPress: [false, false, false, false],
    lineHeight: Settings.currentLineHeightEnglish,
    descriptionFont: Settings.currentSettingsEnglish[0],
    contentFont: Settings.currentSettingsEnglish[1],
    headingFont: Settings.currentSettingsEnglish[3]
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10
          }}
        >
          <View style={{ paddingRight: 5 }}>
            <Icon
              name="contrast"
              size={30}
              color={navigation.getParam("nightMode") ? "black" : "white"}
            />
          </View>
          <ToggleSwitch
            isOn={navigation.getParam("nightMode")}
            onColor="green"
            labelStyle={{ color: "black", fontWeight: "900" }}
            onToggle={navigation.getParam("ToggleSwitch")}
          />
        </View>
      )
    };
  };
  highlight = (string, index) =>
    this.state.longPress[index] ? (
      <Text style={styles.highlighted}>{string} </Text>
    ) : (
      <Text>{string} </Text>
    );

  componentDidMount() {
    this.props.navigation.setParams({ ToggleSwitch: this._toggleSwitch });
    this.props.navigation.setParams({ nightMode: this.state.nightMode });
  }

  _toggleSwitch = () => {
    this.setState({ nightMode: !this.state.nightMode });
    this.props.navigation.setParams({ nightMode: !this.state.nightMode });
  };
  _onLongPress = index => {
    let temp = this.state.longPress;
    if (this.state.longPress[index] == true) {
      temp[index] = false;
      this.sound[index].stop()
    } else {
      temp = this.state.longPress.map((_, i) => i == index);
      this.sound[index].play();
    }
    this.setState({ longPress: temp });
    
  };
  refreshContent = () => {
    this.setState({
      lineHeight: Settings.currentLineHeightEnglish,
      descriptionFont: Settings.currentSettingsEnglish[0],
      contentFont: Settings.currentSettingsEnglish[1],
      headingFont: Settings.currentSettingsEnglish[3]
    });
  };
  render() {
    return (
      <View
        style={
          this.state.nightMode
            ? sectionStyles.mainContainerN
            : sectionStyles.mainContainerL
        }
      >
        <ScrollView>
          <View
            style={{
              paddingHorizontal: 20
            }}
          >
            <Fragment>
              <Text
                selectable={true}
                style={[
                  this.state.nightMode
                    ? sectionStyles.headingStyleN
                    : sectionStyles.headingStyleL,
                  {
                    fontSize: this.state.headingFont,
                    lineHeight: this.state.lineHeight
                  }
                ]}
              >
                Signs in Autistic Children
              </Text>
              <TouchableOpacity onLongPress={() => this._onLongPress(0)}>
                <Text
                  style={[
                    this.state.nightMode
                      ? sectionStyles.contentTextStyleN
                      : sectionStyles.contentTextStyleL,
                    {
                      fontSize: this.state.contentFont,
                      lineHeight: this.state.lineHeight
                    }
                  ]}
                >
                  {this.highlight(
                    "Autsim, or autsim spectrum disorder (ASD), refers to a broad range of conditions characterized by challenges with social skills, repetitive behaviors, speech and nonverbal communcitaion. According to the Centers for Disease Control, autism affects an estimated 1 in 59 children in United States today.",
                    0
                  )}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onLongPress={() => this._onLongPress(1)}>
                <Text
                  style={[
                    this.state.nightMode
                      ? sectionStyles.contentTextStyleN
                      : sectionStyles.contentTextStyleL,
                    {
                      fontSize: this.state.contentFont,
                      lineHeight: this.state.lineHeight
                    }
                  ]}
                >
                  {this.highlight(
                    "We know that there is not one autism but many subtypes, most influenced by a combinatiopn of genetic and environmental factors. Because autism is a spectrum disorder, each person with autism has a distinct set of strenghts and challenges. The ways in which people with autism learn, thiink and problem-solve can range from highly killed to severely challenged. Some people with ASD may require significiant support in thier daily lives, while others may need less support and, in some cases, live entirely independently.\n",
                    1
                  )}
                </Text>
              </TouchableOpacity>

              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Carousel
                  width={phone_width * 0.9}
                  indicatorAtBottom={true}
                  animate={false}
                >
                  <ImageBackground style={{ backgroundColor: "#01411cff" }} />
                  <ImageBackground style={{ backgroundColor: "blue" }} />
                  <ImageBackground style={{ backgroundColor: "grey" }} />
                </Carousel>
              </View>
              <Text
                style={[
                  sectionStyles.descriptionStyle,
                  {
                    fontSize: this.state.descriptionFont,
                    lineHeight: this.state.lineHeight
                  }
                ]}
              >
                "If you've met one person with autism, you've met one person
                with autism"
              </Text>
              <TouchableOpacity onLongPress={() => this._onLongPress(2)}>
                <Text
                  style={[
                    this.state.nightMode
                      ? sectionStyles.contentTextStyleN
                      : sectionStyles.contentTextStyleL,
                    {
                      fontSize: this.state.contentFont,
                      lineHeight: this.state.lineHeight
                    }
                  ]}
                >
                  {this.highlight(
                    "Autsim, or autsim spectrum disorder (ASD), refers to a broad range of conditions characterized by challenges with social skills, repetitive behaviors, speech and nonverbal communcitaion. According to the Centers for Disease Control, autism affects an estimated 1 in 59 children in United States today.",
                    2
                  )}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onLongPress={() => this._onLongPress(3)}>
                <Text
                  style={[
                    this.state.nightMode
                      ? sectionStyles.contentTextStyleN
                      : sectionStyles.contentTextStyleL,
                    {
                      fontSize: this.state.contentFont,
                      lineHeight: this.state.lineHeight
                    }
                  ]}
                >
                  {this.highlight(
                    "We know that there is not one autism but many subtypes, most influenced by a combinatiopn of genetic and environmental factors. Because autism is a spectrum disorder, each person with autism has a distinct set of strenghts and challenges. The ways in which people with autism learn, thiink and problem-solve can range from highly killed to severely challenged. Some people with ASD may require significiant support in thier daily lives, while others may need less support and, in some cases, live entirely independently.\n\n",
                    3
                  )}
                </Text>
              </TouchableOpacity>
            </Fragment>
          </View>
          <ImageBackground style={sectionStyles.footerStyle} />
        </ScrollView>
        <ContentControlPanel refreshContent={this.refreshContent} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  highlighted: {
    backgroundColor: "#e4e4e4"
  }
});
