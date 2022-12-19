import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import HomeScreen from "./screens/HomeScreen";
import TourDetailsScreen from "./screens/TourDetailsScreen";
import utilities from "./tailwind.json";
import { TOURS } from "./config/TOURS";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootNavigator from "./navigator/RootNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // @ts-ignore - Tailwind Provider is missing type definition

    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
}
