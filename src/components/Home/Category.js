//import liraries
import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import SPACING from "../../config/SPACING";

const items = [
  { image: require("../../assets/images/online-shopping.png"), text: "Pick-up" },
  { image: require("../../assets/images/soft-drink.png"), text: "Soft drink" },
  { image: require("../../assets/images/bread.png"), text: "Bakery items" },
  { image: require("../../assets/images/food.png"), text: "Fast food" },
  { image: require("../../assets/images/cupcake.png"), text: "Desserts" },
];
// create a component
const Categories = () => {
  return (
    <View
      style={{
        marginTop:SPACING /2,
        backgroundColor: "white",
        paddingVertical: SPACING,
        paddingLeft: SPACING * 2,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items&& items.map((item, index) => (
         <TouchableOpacity
          key={index.toString()}>
         <View
            style={{ marginRight: 30, alignItems: "center" }}
          >
            <Image
              style={{
                resizeMode: "contain",
                width: 50,
                height: 40,
              }}
              source={item.image}
            ></Image>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "900",
              }}
            >
              {item.text}
            </Text>
          </View>
         </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

// define your styles

//make this component available to the app
export default Categories;
