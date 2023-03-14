//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import SPACING from "../../config/SPACING";
import { Ionicons } from "react-native-vector-icons";

// create a component
const BottomTab = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: SPACING,
        justifyContent: "space-between",
        paddingHorizontal: SPACING,
      }}
    >
      <TabIcon name="home" text="Home" />
      <TabIcon name="search" text="Home" />
      <TabIcon name="cart" text="Home" />
      <TabIcon name="receipt" text="Order" />
      <TabIcon name="person" text="Account" />
    </View>
  );
};

// define your styles

const TabIcon = (props) => (
  <TouchableOpacity>
    <View style={{ alignItems: "center" }}>
      <Ionicons name={props.name} size={SPACING * 3} />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

//make this component available to the app
export default BottomTab;
