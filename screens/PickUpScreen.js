import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const PickUpScreen = () => {
  const [selectedTime, setSelectedTime] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [address,setAddress] = useState('')
  const navigation = useNavigation()
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);

  const deliveryTime = [
    {
      id: "0",
      name: "2-3 Days",
    },
    {
      id: "1",
      name: "3-4 Days",
    },
    {
      id: "2",
      name: "4-5 Days",
    },
    {
      id: "3",
      name: "5-6 Days",
    },
    {
      id: "4",
      name: "Tommorrow",
    },
  ];

  const times = [
    {
      id: "0",
      time: "11:00 PM",
    },
    {
      id: "1",
      time: "12:00 PM",
    },
    {
      id: "2",
      time: "1:00 PM",
    },
    {
      id: "3",
      time: "2:00 PM",
    },
    {
      id: "4",
      time: "3:00 PM",
    },
    {
      id: "5",
      time: "4:00 PM",
    },
  ];

  const proceedToCart = ()=>{
    if(!selectedDate || !delivery || !selectedTime || !address){
      Alert.alert('Alert', 'Select all the fields', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    if(selectedDate && selectedTime && delivery && address){
      navigation.replace("Cart")
    }
  }
  return (
    <>
   
      <SafeAreaView >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          Enter Address
        </Text>
        <TextInput
          style={{
            padding: 40,
            borderColor: "gray",
            borderWidth: 0.7,
            paddingVertical: 80,
            borderRadius: 9,
            margin: 10,
          }}
          onChangeText={setAddress}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          Pick Up Date
        </Text>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date("2023-08-16")}
          endDate={new Date("2023-08-31")}
          initialSelectedDate={new Date("2020-08-22")}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#222831"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          Select Time
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTime(item.time)}
              style={
                selectedTime.includes(item.time)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "red",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
            >
              <Text>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          Delivery Date
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {deliveryTime.map((item, i) => (
            <Pressable
              style={
                delivery.includes(item.name)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "red",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
              onPress={() => setDelivery(item.name)}
              key={i}
            >
              <Text>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </SafeAreaView>
      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088f8f",
            padding: 10,
            marginBottom: 15,
            marginTop:"auto",
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
          <Pressable onPress={proceedToCart}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#fff",
                marginRight: 5,
              }}
            >
              Proceed to Cart
            </Text>
          </Pressable>
        </Pressable>
      )}
    
    </>
  );
};

export default PickUpScreen;

const styles = StyleSheet.create({});
