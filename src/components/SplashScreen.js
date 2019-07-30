import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.setTimePassed();
    }, 1000);
  }

  setTimePassed() {
    this.props.navigation.navigate("MainScreen");
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.TriangleShapeCSS} />
        <View style={styles.textImgContainer}>
          <Image
            style={styles.logoIcon}
            source={require("../assets/pkflag.png")}
          />
          <Text style={styles.text}>
            WELCOME TO{"\n\t\t\t"}PAKISTAN{"\n"}DATA PORTAL
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  TriangleShapeCSS: {
    width: 0,
    height: 0,
    borderRightWidth: width,
    borderTopWidth: height,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#01411cff"
  },
  text: {
    position: "absolute",
    fontSize: 26,
    bottom: 0,
    color: "#01411cff",
    marginBottom: 50,
  },
  textImgContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 170
  },
  logoIcon: {
    position: "absolute",
    bottom: 0,
    width: 150,
    height: 150,
    marginBottom: 130,
  }
});
