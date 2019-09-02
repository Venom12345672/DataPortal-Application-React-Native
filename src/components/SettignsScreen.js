import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import SubSettingsContainer from "./SubsSettingsContainer";

import Header from "./Header";
export default class MainScreen extends React.Component {
  fontSettignsHandler = () => {
    this.props.navigation.navigate("FontSettings");
  };

  changeSettingsHandler = () => {
    this.props.navigation.navigate("ChangeLanguage");
  };

  changeFontStyleHandler = () => {
    this.props.navigation.navigate("FontStyles")
  }
  render() {
    return (
      <View style={styles.container}>
        <Animatable.View animation="slideInDown" duration={400}>
          <Header
            leftComponent={
              <Text
                style={{ color: "white", fontSize: 24, paddingHorizontal: 10 }}
              >
                Settings
              </Text>
            }
            rightComponenet={<Icon name="settings" color="white" size={35} />}
          />
        </Animatable.View>
        <View style={styles.settingsOptionContainer}>
          <SubSettingsContainer
            title="Font Size"
            onPressing={this.fontSettignsHandler}
          />
          <SubSettingsContainer title="Content Language" onPressing={this.changeSettingsHandler}/>
          <SubSettingsContainer title="Content Font" onPressing={this.changeFontStyleHandler}/>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch"
  },
  settingsOptionContainer: {
    marginTop: 10,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center"
  }
});
