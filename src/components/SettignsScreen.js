import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Header, Icon, Slider } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import FontContainer from "./FontContainer";
import LightDarkMode from "./LightDarkMode";

export default class MainScreen extends React.Component {
  fontSettignsHandler = () => {
    this.props.navigation.navigate("FontSettings");
  };

  render() {
    return (
      <View style={styles.container}>
        <Animatable.View animation="slideInDown" duration={400}>
          <Header
            containerStyle={styles.headerStyle}
            leftComponent={<Icon name="settings" size={35} color="white" />}
            centerComponent={{
              text: "Settings",
              style: { color: "white", fontSize: 24 }
            }}
          />
        </Animatable.View>
        <FontContainer goToFont={this.fontSettignsHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 70,
    width: "100%",
    backgroundColor: "#01411cff"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  languageChangeContainer: {
    marginTop: 20,
    height: "25%",
    backgroundColor: "#eee"
  }
});
