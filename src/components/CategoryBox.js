import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image
} from "react-native";

const phone_width = Dimensions.get("window").width;
const phone_height = Dimensions.get("window").height;
export default class CategoryBox extends React.Component {
  render() {
    const images = {
      Dyslexia: {
        path: require("../assets/Dyslexia.png"),
        size: { width: 80, height: 80 }
      },
      Autism: {
        path: require("../assets/Autism.png"),
        size: { width: 120, height: 120, marginTop: 25,}
      },
      ADHD: {
        path: require("../assets/ADHD.png"),
        size: { width: 90, height: 90 }
      },
      Alzheimer: {
        path: require("../assets/Alzheimer.png"),
        size: { width: 100, height: 100 }
      },
      Epilepsy: {
        path: require("../assets/Epilepsy.png"),
        size: { width: 80, height: 80 }
      },
      Schizophrenia: {
        path: require("../assets/Schizophrenia.png"),
        size: { width: 80, height: 80 }
      }
    };
    
    return (
      <TouchableOpacity
        onPress={this.props.onItemPressed}
        style={[styles.container]}
      >
        <View style={styles.imageContainer}>
          <Image
            style={images[this.props.img].size}
            source={images[this.props.img].path}
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
    height: phone_height * 0.23,
    width: phone_width * 0.43,
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
    bottom: 0
  }
});
