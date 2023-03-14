//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons } from "react-native-vector-icons";
import SPACING from "../../config/SPACING";

// create a component
const SearchBar = (props) => {
 const [textInput, setTextInput]= useState('')
 const handleCity = ()=>{
  return props.passData(textInput)
 }
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{
          key: "AIzaSyDqx_LdSPhSFAHIoApES72bOZNUpaUSfhE",
        }}
        placeholder="Search"
        textInputProps={{
          onChangeText: setTextInput,
          onSubmitEditing:handleCity,
          clearButtonMode: "while-editing",
          placeholderTextColor: "gray",
        }}
        styles={{
          textInput: {
            fontWeight: "700",
            backgroundColor: "#eee",
            borderRadius: SPACING * 2,
            marginTop: 7,
          },
          textInputContainer: {
            borderRadius: SPACING * 5,
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#eee",
            marginRight: SPACING,
          },
        }}
        renderLeftButton={() => {
          return (
            <View>
              <Ionicons
                name="location-sharp"
                size={SPACING * 2.5}
                style={{
                  marginLeft: 10,
                }}
              ></Ionicons>
            </View>
          );
        }}
        renderRightButton={() => {
          return (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: SPACING,
                backgroundColor: "white",
                paddingHorizontal: SPACING,
                paddingVertical: SPACING,
                borderRadius: SPACING * 2,
              }}
            >
              <Ionicons name="time" size={15}></Ionicons>
              <Text
                style={{
                  fontWeight: "500",
                  paddingLeft: SPACING / 2,
                }}
              >
                Search
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

//make this component available to the app
export default SearchBar;
