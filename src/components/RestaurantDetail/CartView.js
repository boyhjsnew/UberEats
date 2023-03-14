//import liraries
import { async } from "@firebase/util";
import { useNavigation } from "@react-navigation/native";
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useSelector } from "react-redux";
import SPACING from "../../config/SPACING";
import firebase from "../../Firebase";
import LottieView from "lottie-react-native";
import OrderItems from "./OrderItems";
import { Divider } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";

// create a component
const { width } = Dimensions.get("window");

const CartView = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const items = useSelector((state) => state.cartReducers.selectedItem.items);
  const restaurantName = useSelector(
    (state) => state.cartReducers.selectedItem.restaurantName
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  const addOrderTOFirebase = () => {
    setIsLoading(true);
    setModalVisible(false)
    const db = firebase.firestore();
    db.collection("orders")
      .add({
        items: items,
        restaurantName: restaurantName,
        createAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {

         setIsLoading(false),
            navigation.push("ordercomplete", {
              restaurantName: restaurantName,
              totalUSD: totalUSD,
            });
        }, 2500);
      });
  };

  const modalLoading = () => {
    return (
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LottieView
          transparent={false}
          autoPlay={true}
          style={{
            height: 230,
          }}
          source={require("../../assets/animation/loading.json")}
        ></LottieView>
      </View>
    );
  };

  const checkModalContent = () => {
    return (
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            paddingTop: SPACING,
            height: 500,
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 17,
              fontWeight: "700",
            }}
          >
            {restaurantName}
          </Text>
          {items.map((item, index) => {
            return <OrderItems key={index} item={item} />;
          })}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: SPACING * 2,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "700" }}>Subtotal</Text>
            <Text style={{ fontSize: 15 }}>{totalUSD}</Text>
          </View>

          <TouchableOpacity
            onPress={() => addOrderTOFirebase()}
            style={{
              alignSelf: "center",
              width: width * 0.7,
              backgroundColor: "black",
              borderRadius: 100,
              padding: 14,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={{ flex: 1 }}></View>
              <Text style={{ color: "white", flex: 1, fontSize: 17 }}>
                Checkout
              </Text>
              <Text style={{ color: "white", flex: 0.5, fontSize: 17 }}>
                {totalUSD}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        {checkModalContent()}
      </Modal>
      <Modal
        animationType="slide"
        visible={isLoading}
        transparent={true}
        onRequestClose={() => setIsLoading(isLoading)}
      >
        {modalLoading()}
      </Modal>
      {total ? (
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            width: width * 0.8,
            flex: 1,
            backgroundColor: "black",
            borderRadius: 100,
            position: "absolute",
            bottom: 30,
            alignSelf: "center",
            padding: 14,
            zIndex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              position: "relative",
              width: "100%",
            }}
          >
            <View style={{ flex: 1 }}></View>
            <Text style={{ color: "white", flex: 1, fontSize: 17 }}>
              View Cart
            </Text>
            <Text style={{ color: "white", flex: 0.5, fontSize: 17 }}>
              {totalUSD}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

// define your styles

//make this component available to the app
export default CartView;
