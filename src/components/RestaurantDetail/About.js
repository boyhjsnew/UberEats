//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SPACING from "../../config/SPACING";

// create a component


const About = (props) => {
  const yelpRestaurantInfo = {
    name: "Farmouse Kitchen Thai Cuisine",
    image:
      "https://rachelgouk.com/wp-content/uploads/2021/12/eldivino-thai-restaurant-shanghai-29.jpg",
    price: "$$",
    reviews: "1500",
    rating: " 4.5",
    categories: [
      { title: "Thai" },
      { title: "Comfort Food" },
    ],
  };
  const { name, image_url, price, review_count, rating, categories } =
  props.restaurantDetail;

  const formattedCategories = categories.map((cat) => cat.title).join(" · ");

  return (
    <View>
      <RestaurantImg image={image_url} />
      <RestaurantTittle name={name} />
      <RestaurantDescription
        formattedCategories={formattedCategories}
        price={price}
        reviews={review_count}
        rating={rating}
      />
    </View>
  );
};
const RestaurantImg = (props) => (
  <View style={{ backgroundColor: "red", height: 180 }}>
    <Image
      style={{ width: "100%", height: "100%" }}
      source={{ uri: props.image }}
    ></Image>
  </View>
);
const RestaurantTittle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "700",
      marginTop: SPACING,
      marginHorizontal: SPACING + 5,
    }}
  >
    {props.name}
  </Text>
);
const RestaurantDescription = (props) => (
  <View
    style={{
      flexWrap: "wrap",
      flexDirection: "row",
      alignItems: "center",
      marginTop: SPACING,
      marginLeft: SPACING + 5,
    }}
  >
    <Text
      style={{
        fontSize: 15,
      }}
    >
      {props.formattedCategories}
    </Text>
    <FontAwesome
      style={{ paddingHorizontal: SPACING / 2 }}
      size={15}
      name="credit-card"
      color={"green"}
    />
    <Text>{props.price ? " · " + props.price : " "}</Text>
    <Text>{" · " + props.rating} </Text>
    <FontAwesome
      style={{ paddingHorizontal: SPACING / 2, shadowColor: "black" }}
      size={15}
      name="star"
      color={"green"}
    />
    <Text>( {props.reviews}+) </Text>
  </View>
);

// define your styles

//make this component available to the app
export default About;
