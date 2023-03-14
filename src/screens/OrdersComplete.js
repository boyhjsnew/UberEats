import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import { useRoute } from "@react-navigation/native";
import SPACING from "../config/SPACING";
import { ScrollView } from "react-native-gesture-handler";
import { Divider } from "react-native-elements";
import firebase from "firebase/compat";

export default function OrdersComplete() {
  const [foods, setFoods] = useState([]);
  const route = useRoute();
  const {restaurantName, totalUSD} = route.params
  useEffect(()=>{
    const db = firebase.firestore(); 
    const   getdate = db 
    .collection('orders')
    .onSnapshot((snapshot)=>{
        snapshot.docs.map(doc=>{
            setFoods(doc.data().items)
        });
    })
    return ()=>getdate
},[])

  const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
      <Text style={{ fontSize: 20, fontWeight: "700" }}>{props.titile}</Text>
      <Text>{props.description}</Text>
      <Text>{props.price}</Text>
    </View>
  );
  const FoodImage = (props) => (
    <Image
      style={{ width: 100, height: 100, borderRadius: SPACING }}
      source={{ uri: props.image }}
    ></Image>
  );
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <LottieView
        autoPlay
        loop={false}
        speed={1}
        source={require("../assets/animation/102058-order-completed.json")}
        style={{
          height: 160,
          alignSelf: "center",
          shadowOpacity: 0.2,
          shadowOffset: { width: 2, height: 1 },
        }}
      />

      <Text
        style={{
          alignItems: "center",
          paddingHorizontal: SPACING * 2.5,
          fontSize: 18,
          fontWeight: "800",
        }}
      >
        Your order at {restaurantName} has been placed for {totalUSD}
      </Text>
      <ScrollView showsHorizontalScrollIndicator="false">
        {foods ? foods.map((food, index) => (
          <View key={index}>
            <View
              style={{
                paddingTop: SPACING,
                flexDirection: "row",
                justifyContent: "space-between",
                margin: SPACING * 2,
              }}
            >
              <FoodInfo
                titile={food.titile}
                description={food.description}
                price={food.price}
              />
              <FoodImage image={food.image} />
            </View>
            <Divider width={0.5} orientation="vertical" />
          </View>
        )):null}
      </ScrollView>
      <LottieView
        autoPlay={true}
        style={{
          height: 300,
          alignSelf: "center",
        }}
        source={require("../assets/animation/cooking.json")}
      ></LottieView>
    </SafeAreaView>
  );
}
