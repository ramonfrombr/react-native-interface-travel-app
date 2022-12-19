import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ITour } from "../config/TOURS";
import HomeScreen from "../screens/HomeScreen";
import TourDetailsScreen from "../screens/TourDetailsScreen";

export type RootStackProps = {
  Home: undefined;
  Tour: {
    tour: ITour;
  };
};

const RootStack = createNativeStackNavigator<RootStackProps>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <RootStack.Screen
        options={{ headerShown: false }}
        name="Tour"
        component={TourDetailsScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
