import React from "react";
import { StyleSheet } from "react-native";

const FormStylesGeneric = StyleSheet.create({
  container: {    
    backgroundColor: "white",   
  },
  lineFormElements : {
    margin: 20
  },
  textInputStyle : {
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: "bold",
  },
  label: {
    color: "darkred",
    fontFamily: "Arial",
    fontSize: 24,
    fontWeight: "bold",
    color: "red"
  },
  nextButton: {
    borderWidth: 1,
    borderColor: 'darkred',
    backgroundColor: 'red',
    padding: 15,
    margin: 5
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default FormStylesGeneric;