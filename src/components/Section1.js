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
  ToastAndroid,
  TouchableWithoutFeedback
} from "react-native";
const phone_width = Dimensions.get("window").width;
import Settings from "./settings.json";
import Carousel from "react-native-carousel-view";
import ToggleSwitch from "toggle-switch-react-native";
import { sectionStyles } from "./SectionStyling";
import Icon from "react-native-vector-icons/Foundation";
import ContentControlPanel from "./ContentControlPanel";
import Sound from "react-native-sound";
import WordDefiniton from "./WordDefinition";
import WordDefinition from "./WordDefinition";
export default class Section1 extends React.Component {
  sound = [
    new Sound("tone_1.mp3"),
    new Sound("tone_2.mp3"),
    new Sound("tone_3.mp3"),
    new Sound("tone_4.mp3")
  ];

  medicalTermsDict = {
    autism:
      "A developmental disorder of variable severity that is characterized by difficulty in social interaction and communication and by restricted or repetitive patterns of thought and behaviour.",
    spectrum:
      "A band of colours, as seen in a rainbow, produced by separation of the components of light by their different degrees of refraction according to wavelength."
  };
  state = {
    nightMode: false,
    longPress: [false, false, false, false],
    lineHeight: Settings.currentLineHeightEnglish,
    descriptionFont: Settings.currentSettingsEnglish[0],
    contentFont: Settings.currentSettingsEnglish[1],
    headingFont: Settings.currentSettingsEnglish[3],
    subHeadingFont: Settings.currentSettingsEnglish[2],
    showDefinition: false,
    defWord: ""
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
  removeCh = word => {
    return word.toLowerCase().replace(/[^a-zA-Z ]/g, "");
  };

  renderParagraphElements = line => {
    return line.map(word =>
      this.medicalTermsDict[this.removeCh(word)] ? (
        <Text
          onPress={() =>
            this.setState({
              showDefinition: true,
              defWord: this.removeCh(word)
            })
          }
          style={{ fontWeight: "bold" }}
        >
          {word + " "}
        </Text>
      ) : (
        <Text>{word + " "}</Text>
      )
    );
  };
  highlight = (string, index) => {
    let line = string.split(" ");

    return this.state.longPress[index] ? (
      <Text style={sectionStyles.highlightedL}>
        {this.renderParagraphElements(line)}
      </Text>
    ) : (
      <Text>{this.renderParagraphElements(line)}</Text>
    );
  };

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
      this.sound[index].stop();
    } else {
      this.sound.map(x => x.stop());
      temp = this.state.longPress.map((_, i) => i == index);
      this.sound[index].play(() => {
        let temp = this.state.longPress;
        temp[index] = false;
        this.setState({ longPress: temp });
      });
    }
    this.setState({ longPress: temp });
  };
  refreshContent = () => {
    this.setState({
      lineHeight: Settings.currentLineHeightEnglish,
      descriptionFont: Settings.currentSettingsEnglish[0],
      contentFont: Settings.currentSettingsEnglish[1],
      headingFont: Settings.currentSettingsEnglish[3],
      subHeadingFont: Settings.currentSettingsEnglish[2]
    });
  };
  resetValues = () => {
    this.setState({
      showDefinition: false,
      word: ""
    });
  };
  render() {
    return (
      <View
        style={[
          this.state.nightMode
            ? sectionStyles.mainContainerN
            : sectionStyles.mainContainerL,
          this.state.showDefinition
            ? { backgroundColor: "rgba(0, 0, 0, 0.7)" }
            : null
        ]}
      >
        <ScrollView>
          <View
            style={{
              marginHorizontal: 20
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
              <TouchableWithoutFeedback
                onLongPress={() => this._onLongPress(0)}
              >
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
                    "Autism, or autsim spectrum disorder (ASD), refers to a broad range of conditions characterized by challenges with social skills, repetitive behaviors, speech and nonverbal communcitaion. According to the Centers for Disease Control, autism affects an estimated 1 in 59 children in United States today.",
                    0
                  )}
                </Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onLongPress={() => this._onLongPress(1)}
              >
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
                    "We know that there is not one autism but many subtypes, most influenced by a combinatiopn of genetic and environmental factors. Because autism is a spectrum disorder, each person with autism has a distinct set of strenghts and challenges. The ways in which people with autism learn, thiink and problem-solve can range from highly killed to severely challenged. Some people with ASD may require significiant support in thier daily lives, while others may need less support and, in some cases, live entirely independently.",
                    1
                  )}
                </Text>
              </TouchableWithoutFeedback>

              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20
                }}
              >
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
              <TouchableWithoutFeedback
                onLongPress={() => this._onLongPress(2)}
              >
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
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onLongPress={() => this._onLongPress(3)}
              >
                <Text
                  style={[
                    this.state.nightMode
                      ? sectionStyles.contentTextStyleN
                      : sectionStyles.contentTextStyleL,
                    {
                      fontSize: this.state.contentFont,
                      lineHeight: this.state.lineHeight
                      // marginBottom: 50
                    }
                  ]}
                >
                  {this.highlight(
                    "We know that there is not one autism but many subtypes, most influenced by a combinatiopn of genetic and environmental factors. Because autism is a spectrum disorder, each person with autism has a distinct set of strenghts and challenges. The ways in which people with autism learn, thiink and problem-solve can range from highly killed to severely challenged. Some people with ASD may require significiant support in thier daily lives, while others may need less support and, in some cases, live entirely independently.\n\n",
                    3
                  )}
                </Text>
              </TouchableWithoutFeedback>
            </Fragment>
          </View>
          <ImageBackground style={sectionStyles.footerStyle} />
        </ScrollView>
        <ContentControlPanel refreshContent={this.refreshContent} />
        {this.state.showDefinition ? (
          <WordDefinition
            wordFont={this.state.subHeadingFont}
            definitionFont={this.state.contentFont}
            lineHeight={this.state.lineHeight}
            defWord={this.state.defWord}
            definiton={this.medicalTermsDict[this.state.defWord]}
            resetValues={this.resetValues}
          />
        ) : null}
      </View>
    );
  }
}
