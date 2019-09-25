import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";

import SubSettingsContainer from "./SubsSettingsContainer";
export default class SubCategoryPage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Dyslexia"
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.settingsOptionContainer}>
          <SubSettingsContainer
            title="What is Dyslexia?"
            onPressing={this.fontSettignsHandler}
          />
          <SubSettingsContainer
            title="Side Effects of Dyslexia?"
            onPressing={this.changeSettingsHandler}
          />
          <SubSettingsContainer
            title="Medication for Dyslexia"
            onPressing={this.changeFontStyleHandler}
          />
          <SubSettingsContainer
            title="Medication for Dyslexia"
            onPressing={this.changeFontStyleHandler}
          />
          <SubSettingsContainer
            title="Medication for Dyslexia"
            onPressing={this.changeFontStyleHandler}
          />
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

// state = {
//   categoryNames: [
//     { key: "Alice" },
//     { key: "Alice" },
//     { key: "Alice" },
//     { key: "Alice" },
//     { key: "Alice" },
//     { key: "Alice" },
//     { key: "Alice" },
//     { key: "Alice" },
//     { key: "Alice" },
//     { key: "Alice" },
//     { key: "Alice" }
//   ]
// };

// static navigationOptions = ({ navigation }) => {
//   return {
//     title: navigation.getParam("data")
//   };
// };

// categorySelectedHandler = key => {
//   this.props.navigation.navigate("Section1")
// };

// render() {
//   return (
//     <View style={styles.container}>
//       <CategoryList
//         data={this.state.categoryNames}
//         onItemSelected={this.categorySelectedHandler}
//         color={this.props.navigation.state.params.color}
//       />
//     </View>
//   );
// }
