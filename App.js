import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import Store from "./Store";
import StackNavigator from "./stackNavigator";

export default function App() {
  return (
    <Provider store={Store}>
      <View style={styles.container}> 
        <StackNavigator />
        <StatusBar style="auto" />
      </View> 
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: 30,
  },
});
