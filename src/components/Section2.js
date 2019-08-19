import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Dimensions,
  Button
} from "react-native";
import LightVideo from "../assets/video.mp4";
import VideoPlayer from "react-native-video-controls";

const phone_width = Dimensions.get("window").width;

export default class Section2 extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <View style={{ paddingHorizontal: 20 }}>
          <Button onPress={() => alert(1)} title="+1" color="red" />
        </View>
      )
    };
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={styles.headingStyle}>Signs in Autistic Children</Text>
            <Text style={styles.contentTextStyle}>
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

            <Text style={styles.descriptionStyle}>
              "If you've met one person with autism, you've met one person with
              autism"
            </Text>
            <Text style={styles.contentTextStyle}>
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

          <ImageBackground style={styles.footerStyle} />
        </ScrollView>
      </View>
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
  contentTextStyle: {
    textAlign: "justify",
    fontSize: 16
  },
  headingStyle: {
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    paddingTop: 30,
    paddingBottom: 20
  },
  descriptionStyle: {
    paddingTop: 10,
    color: "grey",
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center"
  },
  footerStyle: {
    backgroundColor: "#01411cff",
    width: "100%",
    height: 50,
    borderTopWidth: 2,
    borderTopColor: "black"
  },
  backgroundVideo: {
    alignItems: "center",
    justifyContent: "center",
    width: phone_width * 0.9,
    height: 300
  }
});
