import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as location from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import DressItem from "../components/DressItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../ProductReducer";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const navigation = useNavigation();
  console.log("Cart Array", cart);

  const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
    "we are loading your location"
  );
  const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);
  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);
  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services not enabled",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      setlocationServicesEnabled(enabled);
    }
  };
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "allow the app to use the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }

    const { coords } = await Location.getCurrentPositionAsync();
    // console.log(coords)
    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      // console.log(response)

      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setdisplayCurrentAddress(address);
      }
    }
  };
  
  const product = useSelector((state) => state.product.product);

  console.log("Product Array", product);

  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length > 0) return;

    const fetchProducts = () => {
      services.map((service) => dispatch(getProducts(service)));
    };
    fetchProducts();
  }, []);
  const services = [
    {
      id: "5",
      image:
        "https://img.freepik.com/premium-vector/shirt-cartoon_119631-405.jpg?w=2000",
      name: "shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "6",
      image:
        "https://media.istockphoto.com/id/1076492630/vector/t-shirt-cartoon.jpg?s=170667a&w=0&k=20&c=wjtcXiet80PXS5nx5cdUYxD0u8MtjjLE7M0Na1jfwVY=",
      name: "T-shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "7",
      image:
        "https://cdn2.vectorstock.com/i/thumb-large/04/06/dress-icon-icon-cartoon-vector-13600406.jpg",
      name: "Dresses",
      quantity: 0,
      price: 10,
    },
    {
      id: "8",
      image:
        "https://t4.ftcdn.net/jpg/01/66/94/33/360_F_166943307_0FQsbZzh9d9UcyKkRnBpNB1Ktr1HrJOi.jpg",
      name: "Jeans",
      quantity: 0,
      price: 10,
    },
    {
      id: "9",
      image:
        "https://static.vecteezy.com/system/resources/previews/015/025/707/non_2x/knitted-red-sweater-on-white-background-for-web-vector.jpg",
      name: "Sweater",
      quantity: 0,
      price: 10,
    },
    {
      id: "10",
      image:
        "https://img.freepik.com/free-vector/red-tanktop-white-background_1308-74595.jpg",
      name: "Sleeveless",
      quantity: 0,
      price: 10,
    },
  ];

  return (
    <>
      <ScrollView style={{ backgroundColor: "#f0f0f0", flex: 1,marginTop:38 }}>
        {/* Location and Profile */}
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <Ionicons name="ios-location" size={30} color="#fd5c63" />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
            <Text>{displayCurrentAddress}</Text>
          </View>
          <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 20 }}
              source={{
                uri: "https://avatars.githubusercontent.com/u/114426215?v=4",
              }}
            ></Image>
          </Pressable>
        </View>
        {/* Search Bar */}
        <View
          style={{
            padding: 10,
            margin: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 0.8,
            borderColor: "#c0c0c0",
            borderRadius: 7,
          }}
        >
          <TextInput placeholder="Search for items" />
          <Feather name="search" size={24} color="#fd5c63" />
        </View>
        {/* Image Carousel */}
        <Carousel />
        {/* Services Components */}
        <Services />
        {/* Render all the products */}
        {product.map((item, index) => {
          return <DressItem item={item} key={index} />;
        })}
      </ScrollView>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088f8f",
            padding: 10,
            marginBottom: 15,
            margin: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "600",
                color: "#fff",
              }}
            >
              {cart.length} items | ${total}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: "#fff",
                marginVertical: 6,
              }}
            >
              Extra charges might apply
            </Text>
          </View>
          <Pressable onPress={() => navigation.navigate("PickUp")}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#fff",
                marginRight: 5,
              }}
            >
              Proceed to pickup
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
