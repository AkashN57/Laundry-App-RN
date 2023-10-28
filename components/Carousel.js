import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://media.cnn.com/api/v1/images/stellar/prod/210915133905-how-to-do-laundry-lead.jpg?q=w_1601,h_901,x_0,y_0,c_fill",
    "https://hips.hearstapps.com/hmg-prod/images/ghk030121laundrypackage-015-1617040989.jpg?crop=0.923xw:0.692xh;0.0212xw,0.223xh&resize=768:*",
    "https://img.freepik.com/premium-photo/interior-real-laundry-room-with-washing-machine-home_566707-2617.jpg?w=2000"
  ];

  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor={"#13274f"}
        inactiveDotColor="#90a4ae"
        ImageComponentStyle={{ borderRadius: 6, width: "94%" }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
