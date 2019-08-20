import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Button,
  Switch,
  Dimensions
} from "react-native";
import LightVideo from "../assets/video.mp4";
import VideoPlayer from "react-native-video-controls";
import ToggleSwitch from "toggle-switch-react-native";
import { sectionStyles } from "./SectionStyling";
import Icon from "react-native-vector-icons/Foundation";

const phone_width = Dimensions.get("window").width;

export default class Section2 extends React.Component {
  state = {
    nightMode: false
  };

  static navigationOptions = ({ navigation }) => {
    console.log(navigation.state);
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
  componentDidMount() {
    this.props.navigation.setParams({
      ToggleSwitch: this._toggleSwitch,
      nightMode: this.state.nightMode
    });
  }

  _toggleSwitch = () => {
    this.setState({ nightMode: !this.state.nightMode });
    this.props.navigation.setParams({ nightMode: !this.state.nightMode });
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
            <Text
              style={
                this.state.nightMode
                  ? sectionStyles.headingStyleN
                  : sectionStyles.headingStyleL
              }
            >
              Signs in Autistic Children
            </Text>
            <Text
              style={
                this.state.nightMode
                  ? sectionStyles.contentTextStyleN
                  : sectionStyles.contentTextStyleL
              }
            >
              Autsim, or autsim spectrum disorder (ASD), refers to a broad range
              of conditions characterized by challenges with social skills,
              repetitive behaviors, speech and nonverbal communcitaion.
              According to the Centers for Disease Control, autism affects an
              estimated 1 in 59 children in United States today.{"\n\n"}
              We know that there is not one autism but many subtypes, most
              influenced by a combinatiopn of genetic and environmental factors.
              Because autism is a spectrum disorder, each person with autism has
              a distinct set of strenghts and challenges. The ways in which
              people with autism learn, thiink and problem-solve can range from
              highly killed to severely challenged. Some people with ASD may
              require significiant support in thier daily lives, while others
              may need less support and, in some cases, live entirely
              independently.
              {"\n\n"}
            </Text>
            <View style={styles.backgroundVideo}>
              <VideoPlayer
                source={LightVideo}
                paused={true}
                disableVolume
                disableBack
              />
            </View>

            <Text style={sectionStyles.descriptionStyle}>
              "If you've met one person with autism, you've met one person with
              autism"
            </Text>
            <Text
              style={
                this.state.nightMode
                  ? sectionStyles.contentTextStyleN
                  : sectionStyles.contentTextStyleL
              }
            >
              {"\n\n"}Autsim, or autsim spectrum disorder (ASD), refers to a
              broad range of conditions characterized by challenges with social
              skills, repetitive behaviors, speech and nonverbal communcitaion.
              According to the Centers for Disease Control, autism affects an
              estimated 1 in 59 children in United States today.{"\n\n"}
              We know that there is not one autism but many subtypes, most
              influenced by a combinatiopn of genetic and environmental factors.
              Because autism is a spectrum disorder, each person with autism has
              a distinct set of strenghts and challenges. The ways in which
              people with autism learn, thiink and problem-solve can range from
              highly killed to severely challenged. Some people with ASD may
              require significiant support in thier daily lives, while others
              may need less support and, in some cases, live entirely
              independently.{"\n"}
            </Text>
          </View>

          <ImageBackground style={sectionStyles.footerStyle} />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backgroundVideo: {
    alignItems: "center",
    justifyContent: "center",
    width: phone_width * 0.9,
    height: 300
  }
});
