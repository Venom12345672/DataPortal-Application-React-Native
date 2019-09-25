import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";

import SubSettingsContainer from "./SubsSettingsContainer";
import Section1 from "./Section1";
export default class SubCategoryPage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("data")
    };
  };

  categorySelectedHandler = () => {
    this.props.navigation.navigate("Section1");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.settingsOptionContainer}>
          <SubSettingsContainer
            title="Sub Category 1"
            onPressing={this.categorySelectedHandler}
          />
          <SubSettingsContainer
            title="Sub Category 2"
            onPressing={this.categorySelectedHandler}
          />
          <SubSettingsContainer
            title="Sub Category 3"
            onPressing={this.categorySelectedHandler}
          />
          <SubSettingsContainer
            title="Sub Category 4"
            onPressing={this.categorySelectedHandler}
          />
          <SubSettingsContainer
            title="Sub Category 5"
            onPressing={this.categorySelectedHandler}
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
