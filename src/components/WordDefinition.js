import React, { Fragment } from "react";
import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/Entypo";
const phone_height = Dimensions.get("window").height;
const drawer_height = phone_height * 0.3;
export default class WordDefinition extends React.Component {
  render() {
    return (
      <Animatable.View
        animation="slideInDown"
        duration={400}
        style={styles.container}
      >
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold"
            }}
          >
            Definiton
          </Text>
          <Icon
            name="squared-cross"
            size={30}
            onPress={() => this.props.resetValues()}
          />
        </View>
        <View style={styles.definitionBlock}>
          <ScrollView>
            <Text style={styles.outerTextBox}>
              <Text
                style={{
                  fontSize: this.props.wordFont,
                  lineHeight: this.props.lineHeight,
                  fontWeight: "bold"
                }}
              >
                {this.props.defWord[0].toUpperCase() +
                  this.props.defWord.substring(1)}
                :{"\n"}
              </Text>
              <Text
                style={{
                  fontSize: this.props.definitionFont,
                  lineHeight: this.props.lineHeight
                }}
              >
                {this.props.definiton}
              </Text>
            </Text>
          </ScrollView>
        </View>
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: drawer_height,
    backgroundColor: "#e4e4e4",
    flexDirection: "column"
  },
  header: {
    height: "25%",
    backgroundColor: "grey",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 10
  },
  definitionBlock: {
    height: "75%",
    // borderBottomColor: "black",
    // borderBottomWidth: 10
  },
  outerTextBox: {
    marginHorizontal: 20,
    textAlign: "justify",
    marginVertical: 10
  }
});
