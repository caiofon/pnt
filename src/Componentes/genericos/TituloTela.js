import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PropTypes from 'prop-types';

export default class TituloTela extends Component {
  static propTypes = {
    titulo : PropTypes.string.isRequired
  };

  render() {
    return (
      <View style={styles.userBox}>
        <Text style={[styles.textTitle, {marginLeft: 15}]}>{this.props.titulo}</Text>                
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userBox : {
    backgroundColor: "gray",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center"
  },
  textTitle: {
    color: "white",
    fontFamily: "Arial",
    fontSize: 24,
    fontWeight: "bold",
    paddingTop:15,
    paddingBottom: 15
  },
});