import React, { Component } from "react";
import { TextInput, StyleSheet,  } from "react-native";

export default class Input extends Component {
  render() {
    return (
      <TextInput
        style={[styles.textInput, this.props.textInputStyle]}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: "90%",
    alignSelf: "center",
    borderBottomColor: "#c4c3c3",
    borderBottomWidth: 1.5,
    color: "#242222",
    height: 40,
    fontSize: 15,
    fontWeight: "bold"
  }
});