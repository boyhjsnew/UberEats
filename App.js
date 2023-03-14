import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import RestaurantDetail from "./src/screens/RestaurantDetail";
import RootNavigation from "./src/navigation";


const image ='https://rachelgouk.com/wp-content/uploads/2021/12/eldivino-thai-restaurant-shanghai-29.jpg'

const titile ='Farmouse Kitchen Thai Cuisine'

const description = 'Thai · Comfort Food · $$ Ticket · star (2913)'

export default function App() {
  return (
    <RootNavigation/>
  );
}
