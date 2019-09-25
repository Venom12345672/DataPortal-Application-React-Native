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
    return (
      <TouchableOpacity
        onPress={this.props.onItemPressed}
        style={styles.container}
      >
        <View style={styles.imageContainer}>
          <Image
            style={{
              height: 100,
              width: 100
            }}
            source={require("../assets/Dyslexia.png")}
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
    margin: 10,
    backgroundColor: "#F8F8F8",
    height: 170,
    width: 170,
    borderColor: "#4AAA83",
    borderWidth: 1
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
