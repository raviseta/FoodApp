import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ResultShowScreen from "./src/Screens/ResultShowScreen";
import SearchScreen from "./src/Screens/SearchScreen";

const navigator = createStackNavigator(
  {
    searchScreen: SearchScreen,
    resultShowScreen: ResultShowScreen,
  },
  {
    initialRouteName: "searchScreen",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
