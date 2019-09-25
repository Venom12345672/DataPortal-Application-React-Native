import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image
} from "react-native";

export default class CategoryBox extends React.Component {
  render() {
    const images = {
      Dyslexia: require("../assets/Dyslexia.png"),
      Autism: require("../assets/Autism.png"),
      ADHD: require("../assets/ADHD.png"),
      Alzheimer: require("../assets/Alzheimer.png"),
      Epilepsy: require("../assets/Epilepsy.png"),
      Schizophrenia: require("../assets/Schizophrenia.png")
    };
    return (
      <TouchableOpacity
        onPress={this.props.onItemPressed}
        style={[styles.container]}
      >
        <View style={styles.imageContainer}>
          <Image
            style={{
              height: 80,
              width: 80
            }}
            source={images[this.props.img]}
          ></Image>
        </View>
        <View style={styles.textContainer}>
          <Text style={{ color: "white", fontSize: 22 }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    backgroundColor: "#F8F8F8",
    height: 170,
    width: 150,
    borderColor: "#4AAA83",
    borderWidth: 1,
    elevation: 8,
    borderTopLeftRadius: 15
  },
  imageContainer: {
    height: "70%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    backgroundColor: "#4AAA83",
    height: "30%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  }
});
