//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";


import { Divider } from 'react-native-elements';

import Category from '../components/Home/Category'
import HeaderTab from "../components/Home/HeaderTab";
import SearchBar from "../components/Home/SearchBar";
import getData from '../Api/getData'
import RestaurentItems, { localRestaurants } from "../components/Home/RestaurantItems";
import BottomTab from "../components/Home/BottomTab";


// create a component
const Home = ({navigation, ...props}) => {
  const [tabActive, setTabActive] = useState("Delivery");
  const [city, setCity] = useState("Hollywood");
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const YELP_API_KEY =
    "KeYIsBxQLw0gaVGyexn5AGsc-drWUwZIgFu6TOuD9CvTacZqJTZTHaDhOtzWNv_RL5lZGApV_rlc5ZehSwqaOf9XW73vZjkGjUXIDM_SS79a5Ls_GJtDaSpKn4IEZHYx";

  useEffect(() => {
    getData(city)
      .then((res) =>
        setRestaurantData(
          res.businesses.filter((busines) =>
            busines.transactions.includes(tabActive.toLowerCase())
          )
        )
      )
      .catch((e) => console.log(e));
  }, [city, tabActive]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#eee",
        flex: 1,
      }}
    >
      <View
        style={{
          padding: 15,
          backgroundColor: "white",
        }}
      >
        <HeaderTab tabActive={tabActive} setTabActive={setTabActive} />
        <SearchBar passData={setCity} />
      </View>
      <ScrollView>
        <Category />
        <RestaurentItems restaurantData={restaurantData} navigation= {navigation} />
      </ScrollView>
      
      <Divider color="black" width={1}>    
      </Divider>
      <BottomTab/>
     
    </SafeAreaView>
  );
};

//make this component available to the app
export default Home;
