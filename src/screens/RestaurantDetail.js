//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/RestaurantDetail/About";
import CartView from "../components/RestaurantDetail/CartView";
import MenuItems from "../components/RestaurantDetail/MenuItems";
import SPACING from "../config/SPACING";



// create a component
const RestaurantDetail = ({navigation, route}) => {
  const {restaurantDetail} = route.params
  const restaurantName  = restaurantDetail.name

  return (
    <View style={{flex:1}}>
      <About restaurantDetail ={restaurantDetail}/>
      <Divider width={1.8} style={{marginVertical:SPACING*2}}/>
      <MenuItems restaurantName ={restaurantName} />
      <CartView/>
    </View>
  );
};


//make this component available to the app
export default RestaurantDetail;
