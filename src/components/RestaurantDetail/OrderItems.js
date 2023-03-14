import { View, Text } from "react-native";
import React from "react";
import SPACING from "../../config/SPACING";
import { Divider } from "react-native-elements";

export default function OrderItems(prop) {
  const { titile, price } = prop.item;
  return (
    <View style={{  justifyContent:"center", }}>
      <View
        style={{
          margin: SPACING*2  ,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: SPACING * 2,
          alignItems: "center",

        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "800" }}>{titile}</Text>
        <Text style={{ fontSize: 15 }}>{price}</Text>
      </View>
      <Divider  width={0.8} style={{ marginHorizontal: SPACING*2  , }}></Divider>
    </View>
    
  );
}
