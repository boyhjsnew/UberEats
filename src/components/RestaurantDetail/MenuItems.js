//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import SPACING from "../../config/SPACING";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

// create a component
const foods = [
  {
    id : 1 ,
    titile: "Lasagna 1",
    description: "With buffer letture, tomato nad sauce bechaeml",
    price: "$13.50",
    image:
      "https://rachelgouk.com/wp-content/uploads/2021/12/eldivino-thai-restaurant-shanghai-29.jpg",
  },
  {
    id : 2 ,
    titile: "Lasagna 2",
    description: "With buffer letture, tomato nad sauce bechaeml",
    price: "$13.50",
    image:
      "https://media.istockphoto.com/id/694189032/vi/anh/y%C3%AAu-th%C3%ADch-bbq-c%E1%BA%A7m-tay.jpg?s=612x612&w=0&k=20&c=y_YLYHn2bW56TPdM2BRqnKWwV1d2S6euDc80rGAlHsA=",
  },
  {
    id : 3 ,
    titile: "Lasagna 3",
    description: "With buffer letture, tomato nad sauce bechaeml",
    price: "$13.50",
    image:
      "https://media.istockphoto.com/id/1232401725/vi/anh/c%E1%BA%A3nh-b%E1%BA%A3ng-c%E1%BB%A7a-c%C3%A1c-lo%E1%BA%A1i-th%E1%BB%B1c-ph%E1%BA%A9m-mang-ra-ho%E1%BA%B7c-giao-h%C3%A0ng-t%E1%BB%AB-tr%C3%AAn-xu%E1%BB%91ng-xem-tr%C3%AAn-m%E1%BB%99t-bi%E1%BB%83u-ng%E1%BB%AF-g%E1%BB%97.jpg?s=612x612&w=0&k=20&c=r7-uFXxGPGyTaMLzJO_t8wSDl4DHJ1xk6uaiD8vPVu0=",
  },
  {
    id : 4,
    titile: "Lasagna 4",
    description: "With buffer letture, tomato nad sauce bechaeml",
    price: "$13.50",
    image:
      "https://media.istockphoto.com/id/694177316/vi/anh/bbq-b%E1%BB%AFa-ti%E1%BB%87c.jpg?s=612x612&w=0&k=20&c=6uy2bu5EunOKGb1WuxEzunaGPUtHmvYP71ewU4Y3PwA=",
  },
  {
    id : 5 ,
    titile: "Lasagna 5",
    description: "With buffer letture, tomato nad sauce bechaeml",
    price: "$13.50",
    image:
      "https://rachelgouk.com/wp-content/uploads/2021/12/eldivino-thai-restaurant-shanghai-29.jpg",
  },
];

const MenuItems = (props) => {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: props.restaurantName,
        checkboxValue: checkboxValue,
      },
    });
const cartItem = useSelector(state =>  state.cartReducers.selectedItem.items)
const Checkbox = (food) =>{ 
  let check = false
  cartItem.map(cart =>{
    if (cart.titile == food.titile){
      check = cart.checkboxValue
    }
  })
  return check
 
}
  return (
    <ScrollView showsHorizontalScrollIndicator="false">
      {foods.map((food, index) => (
        <View key={index}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: SPACING * 2,
            }}
          >
            <BouncyCheckbox
              isChecked={Checkbox(food)}
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              fillColor="green"
              iconStyle={{ borderRadius: SPACING / 2 }}
            />
            <FoodInfo
              titile={food.titile}
              description={food.description}
              price={food.price}
            />
            <FoodImage image={food.image} />
          </View>
          <Divider width={0.5} orientation="vertical" />
        </View>
      ))}
    </ScrollView>
  );
};

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
// define your styles
//make this component available to the app
export default MenuItems;
