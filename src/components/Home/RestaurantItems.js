//import liraries
import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import SPACING from "../../config/SPACING";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

// create a component
const RestaurentItems = ({navigation, ...props}) => (

   <View>
     {props.restaurantData && props.restaurantData.map((restaurant, index) => (
      <TouchableOpacity activeOpacity={0.5} style={{ marginBottom: SPACING }}
       key={index}
       onPress={()=> navigation.navigate("restaurentdetail",
       {
        // name:restaurant.name ,
        // image: restaurant.image_url,
        // price:restaurant.price,
        // rating:restaurant.rating,
        restaurantDetail :restaurant 
       }
       )}>
         <View
        style={{
          marginTop: SPACING,
          backgroundColor: "white",
          padding: SPACING + 5,
        }}
      >
        <RestaurantImg image={restaurant.image_url} />
        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
      </View>
      </TouchableOpacity>
    ))}
   </View>

);

const RestaurantImg = (props) => (
  <View>
    <Image
      style={{
        width: "100%",
        height: 180,
      }}
      source={{
        uri: props.image,
      }}
    ></Image>
    <TouchableOpacity style={{ position: "absolute", right: 10, top: 10 }}>
      <Ionicons
        name="heart-outline"
        size={SPACING * 3}
        color={"white"}
      ></Ionicons>
    </TouchableOpacity>
  </View>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: SPACING,
    }}
  >
    <View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "700",
        }}
      >
        {props.name}
      </Text>
      <Text
        style={{
          fontSize: 13,
          color: "gray",
        }}
      >
        35-45 · min
      </Text>
    </View>
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee",
        width: 35,
        height: 35,
        borderRadius: 20,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);

// define your styles

//make this component available to the app
export default RestaurentItems;
