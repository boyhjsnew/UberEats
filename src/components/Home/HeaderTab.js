//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SPACING from "../../config/SPACING";

// create a component
const HeaderTabs = (props) => {
 
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        paddingHorizontal: SPACING + 6,
      }}
    >
      <HeaderButton
        tittle="Delivery"
        tabActive={props.tabActive}
        setTabActive={props.setTabActive}
      />
      <HeaderButton
        tittle="Pickup"
        tabActive={props.tabActive}
        setTabActive={props.setTabActive}
      />
    </View>
  );
};

const HeaderButton = (props) => (
  <View>
    <TouchableOpacity
      style={{
        borderRadius: 20,
        backgroundColor: props.tabActive == props.tittle ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: SPACING + 6,
      }}
      onPress={() => props.setTabActive(props.tittle)}
    >
      <Text
        style={{
          fontWeight: "900",
          fontSize: SPACING * 1.7,
          color:props.tabActive == props.tittle ? "white" : "black",
        }}
      >
        {props.tittle}
      </Text>
    </TouchableOpacity>
  </View>
);

//make this component available to the app
export default HeaderTabs;
