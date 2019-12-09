import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

export default class Rodape extends Component {

  clique = () => {
    console.log("clique rodape")
  }

  render() {
    return (
      <View style={styles.bottomBox}>
        <TouchableOpacity style={styles.bottomButton} onPress={ this.clique }>
          <Image source={require('../../images/profile.png')}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={ this.clique }>
          <Image source={require('../../images/calendar.png')}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={ this.clique }>
          <Image source={require('../../images/chat.png')}  />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomBox : {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",    
    alignItems: "flex-start",
    backgroundColor: "#333",
    padding: 20    
  },
  bottomButton: {    
    justifyContent: "center"
  },
});