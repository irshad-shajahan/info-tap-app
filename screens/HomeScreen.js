import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Image,
  Button,
} from "react-native";
import React from "react";
import img from "../assets/tapclone.png";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <View className="h-40 bg-green-100">
      {/* <StatusBar />  */}
      <View className="w-full flex-1 h-10 bg-hite">
        <Image
          className="w-16 h-16 m-1"
          source={require("../assets/tapclone.png")}
        />
      </View>
      <View className="flex items-center h-full justify-center">
        <Button title="Check IN" />
      </View>
      <NavOptions />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
