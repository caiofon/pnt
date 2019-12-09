import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Cabecalho extends Component {
  render() {
    return (
      <View style={styles.titleTop}>

        <Image style={styles.imageLogo} source={require('../../res/Images/pnt_banner.jpg')}  />          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageLogo: {
    flexShrink: 10,
    resizeMode: 'cover', 
    width: 800,
    height: 210
  },
  titleTop : {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
    paddingTop: 20,
    paddingBottom: 20
  },
  titleTopText : {
    fontFamily: "Arial",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",   
  }
});