import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity } from "../CartReducer";
import { decrementQty, incrementQty } from "../ProductReducer";

const DressItem = ({ item, index }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const addItemToCart = (item) => {
     dispatch(addToCart(item)); //cart
     dispatch(incrementQty(item)); //product
    
  };
  return (
    <View>
      <Pressable
        style={{
          backgroundColor: "#f8f8f8",
          borderRadius: 8,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Image
            style={{ width: 70, height: 70 }}
            source={{ uri: item.image }}
          />
        </View>
        <View>
          <Text
            style={{
              width: 83,
              fontSize: 17,
              fontWeight: "500",
              marginBottom: 7,
            }}
          >
            {item.name}
          </Text>
          <Text style={{ width: 60, color: "gray", fontSize: 15 }}>
            ${item.price}
          </Text>
        </View>
        {cart.some((c) => c.id === item.id) ? (
          <Pressable
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <Pressable
            onPress={()=>{
               dispatch(decrementQuantity(item)) //cart
              dispatch(decrementQty(item)) //product
              console.log("DECREMENT ITEM : ",item)
            }}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#bebebe",
                backgroundColor: "#e0e0e0",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#088f8f",
                  paddingHorizontal: 6,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                -
              </Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  fontSize: 19,
                  color: "#088f8f",
                  paddingHorizontal: 8,
                  fontWeight: "600",
                }}
              >
                {item.quantity}
              </Text>
            </Pressable>
            <Pressable
             onPress={()=>{
              dispatch(incrementQuantity(item)) //cart
              dispatch(incrementQty(item)) //product
            }}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#bebebe",
                backgroundColor: "#e0e0e0",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#088f8f",
                  paddingHorizontal: 6,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                +
              </Text>
            </Pressable>
          </Pressable>
        ) : (
          <Pressable 
          style={{ width: 80 }} 
          onPress={()=>addItemToCart(item)}>
            <Text
              style={{
                borderColor: "gray",
                borderWidth: 0.8,
                marginVertical: 10,
                color: "#088f8f",
                textAlign: "center",
                fontSize: 17,
                fontWeight: "bold",
                padding: 5,
                borderRadius: 5,
              }}
            >
              Add
            </Text>
          </Pressable>
        )}
      </Pressable>
    </View>
  );
};

export default DressItem;

const styles = StyleSheet.create({});
