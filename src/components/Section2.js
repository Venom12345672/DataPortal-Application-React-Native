import React from "react";
import { Text, View, StyleSheet } from "react-native";
import LightVideo from "../assets/video.mp4";
import VideoPlayer from "react-native-video-controls";

export default class Section2 extends React.Component {
  render() {
    return (
      <View style={styles.backgroundVideo}>
        <VideoPlayer
          source={LightVideo}
          paused = {true}
          disableVolume
          disableBack
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  backgroundVideo: {
    height: "40%",
    width: "90%",
    alignSelf: 'center',
    borderRadius: 5
  }
});
