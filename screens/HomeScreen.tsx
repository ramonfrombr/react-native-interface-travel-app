import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { CATEGORIES } from "../config/CATEGORIES";
import COLORS from "../config/COLORS";
import { TOURS } from "../config/TOURS";
import { ADVENTURES } from "../config/ADVENTURES";
import SPACING from "../config/SPACING";
import { useTailwind } from "tailwind-rn";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackProps } from "../navigator/RootNavigator";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackProps,
  "Home"
>;

const WIDTH = Dimensions.get("screen").width;

const HomeScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <SafeAreaView>
      <View style={tw("p-2")}>
        <View style={tw("flex-row justify-between items-center")}>
          <Text style={tw("text-2xl font-bold text-dark")}>Discover</Text>
          <Image
            style={tw("h-11 w-11 rounded-full ")}
            source={require("../assets/images/Avatar.png")}
          ></Image>
        </View>

        <ScrollView style={tw("my-6")} horizontal>
          {CATEGORIES.map((category, index) => (
            <TouchableOpacity
              onPress={() => setActiveCategory(index)}
              key={category.id}
              style={tw("mr-3")}
            >
              <Text
                style={tw(
                  `text-lg ${
                    activeCategory === index ? "text-primary" : "text-dark"
                  }`
                )}
              >
                {category.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={tw("text-dark text-base")}>
          {CATEGORIES[activeCategory].tours.length + " "}
          {CATEGORIES[activeCategory].title}
        </Text>

        <ScrollView
          horizontal
          snapToInterval={WIDTH * 0.745}
          decelerationRate="fast"
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={tw("my-6")}
        >
          {CATEGORIES[activeCategory].tours.map((tour, idx) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Tour", { tour: TOURS[0] })}
              style={[
                tw("overflow-hidden rounded-lg mr-5"),
                { width: WIDTH * 0.7, height: WIDTH * 0.9 },
              ]}
              key={idx}
            >
              <View
                style={tw(
                  "absolute z-10 h-full w-full bg-transparent justify-between p-3"
                )}
              >
                <TouchableOpacity
                  style={tw(
                    "self-end p-2 bg-white rounded-full justify-center items-center"
                  )}
                >
                  <Ionicons
                    name="heart-outline"
                    size={SPACING * 3}
                    color={COLORS.primary}
                  />
                </TouchableOpacity>
                <Text style={tw("text-xl text-white font-bold ml-3")}>
                  {tour.title}
                </Text>
              </View>
              <Image source={tour.image} style={tw("w-full h-full")} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={tw("flex-row justify-between items-center")}>
          <Text style={tw("font-bold text-dark text-xl")}>
            Feeling Adventurous?
          </Text>
          <TouchableOpacity>
            <Text style={tw("font-bold text-primary text-base")}>Show all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={tw("my-3")}
        >
          {ADVENTURES.map((adventure) => (
            <TouchableOpacity
              key={adventure.id}
              style={tw("mr-6 p-3 items-center")}
            >
              <View style={tw("w-10 h-10")}>
                <Image
                  source={adventure.image}
                  resizeMode="contain"
                  style={tw("w-full h-full")}
                />
              </View>
              <Text style={tw("uppercase text-sm mt-3")}>
                {adventure.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
