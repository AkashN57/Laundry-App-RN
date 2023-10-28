import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Services = () => {
  const services = [
    {
      id: "0",
      image:
        "https://static.vecteezy.com/system/resources/previews/004/595/799/original/hand-put-dirty-tshirt-on-bucket-full-soap-of-deterent-washing-clothes-symbol-in-cartoon-illustration-on-white-background-vector.jpg",
      name: "Washing",
    },
    {
      id: "1",
      image:
        "https://img.freepik.com/free-vector/washing-machine-laundry-set-cartoon-icon-illustration-technology-fashion-icon-concept-isolated-flat-cartoon-style_138676-2150.jpg",
      name: "Laundry",
    },
    {
      id: "3",
      image:
        "https://media.istockphoto.com/id/1227411957/vector/iron-and-clothes-on-an-ironing-board-flat-vector-illustration-household-concept-design.jpg?s=612x612&w=0&k=20&c=rwIve4dsrqMROJ7MqkFejHimAIcjEHvXvnW5EVOrlxU=",
      name: "Wash & Iron",
    },
    {
      id: "4",
      image:
        "https://img.freepik.com/premium-vector/cleaning-service-cartoon-with-cute-pose-icon-illustration_244307-545.jpg",
      name: "Cleaning",
    },
  ];
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 7 }}>
        Services Available
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service, index) => {
          return (
            <Pressable
              key={index}
              style={{
                margin: 10,
                padding: 20,
                backgroundColor: "#fff",
                borderRadius: 7,
              }}
            >
              <Image
                source={{ uri: service.image }}
                style={{ width: 75, height: 75 }}
              />
              <Text style={{ textAlign: "center", marginTop: 10,fontWeight:"500" }}>
                {service.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
