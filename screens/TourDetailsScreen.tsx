import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ImageSourcePropType } from "react-native";
import { ITour, ImageProps } from "../config/TOURS";
import COLORS from "../config/COLORS";
import SPACING from "../config/SPACING";
import { useTailwind } from "tailwind-rn";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackProps } from "../navigator/RootNavigator";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

export type TourScreenNavigationProp = NativeStackNavigationProp<
  RootStackProps,
  "Tour"
>;

type TourScreenRouteProp = RouteProp<RootStackProps, "Tour">;

const TourDetailsScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<TourScreenNavigationProp>();
  const {
    params: { tour },
  } = useRoute<TourScreenRouteProp>();

  const [backgroundImage, setBackgroundImage] = useState<ImageSourcePropType>(
    tour.image
  );

  const handleBackgroundImageChange = (image: ImageSourcePropType) => {
    setBackgroundImage(image);
  };
  return (
    <>
      <ScrollView>
        <ImageBackground
          source={backgroundImage}
          style={tw("h-[500px] w-full")}
        >
          <SafeAreaView>
            <View style={tw("px-2 justify-between flex-row h-full")}>
              <TouchableOpacity
                onPress={navigation.goBack}
                style={tw(
                  "bg-white w-10 h-10 rounded-full items-center justify-center"
                )}
              >
                <Ionicons
                  name="chevron-back"
                  color={COLORS.primary}
                  size={SPACING * 3}
                />
              </TouchableOpacity>

              <View style={tw("items-end justify-between pb-24")}>
                <TouchableOpacity
                  style={tw(
                    "bg-white w-10 h-10 rounded-full items-center justify-center"
                  )}
                >
                  <Ionicons
                    name="heart-outline"
                    color={COLORS.primary}
                    size={SPACING * 3}
                  />
                </TouchableOpacity>

                <View>
                  {tour.images.map((gallery: ImageProps, idx: number) => (
                    <TouchableOpacity
                      onPress={() => handleBackgroundImageChange(gallery.image)}
                      key={idx}
                      style={tw("w-14 h-14 p-1 bg-white rounded mb-2")}
                    >
                      <Image
                        source={gallery.image}
                        style={tw("w-full h-full rounded")}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>

        <View style={tw("p-6 rounded-[40px] bottom-6 bg-white")}>
          <View style={tw("flex-row justify-between")}>
            <Text style={tw("font-bold text-xl text-dark")}>{tour.title}</Text>
            <View style={tw("flex-row items-end")}>
              <Text style={tw("font-bold text-xl text-dark")}>
                {tour.price}
              </Text>
              <Text>/person</Text>
            </View>
          </View>
          <View style={tw("my-3")}>
            <View style={tw("flex-row mb-4")}>
              <TouchableOpacity style={tw("py-3 mr-6")}>
                <Text style={tw("text-primary font-bold text-lg")}>
                  Overview
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw("py-3 mr-8")}>
                <Text>Reviews</Text>
              </TouchableOpacity>
            </View>
            <View style={tw("mb-6 flex-row")}>
              <View style={tw("flex-row")}>
                <View
                  style={[
                    tw("bg-white p-1 rounded mr-4"),
                    {
                      shadowRadius: SPACING / 2,
                      shadowOpacity: 0.1,
                      shadowOffset: { width: SPACING / 2, height: SPACING },
                      shadowColor: COLORS.dark,
                    },
                  ]}
                >
                  <Ionicons
                    name="time"
                    size={SPACING * 3}
                    color={COLORS.primary}
                  />
                </View>
                <View style={tw("mr-4")}>
                  <Text style={tw("uppercase text-xs")}>Duration</Text>
                  <Text style={tw("font-bold text-base")}>{tour.duration}</Text>
                </View>
              </View>

              <View style={tw("flex-row")}>
                <View
                  style={[
                    tw("bg-white p-1 rounded mr-4"),
                    {
                      shadowRadius: SPACING / 2,
                      shadowOpacity: 0.1,
                      shadowOffset: { width: SPACING / 2, height: SPACING },
                      shadowColor: COLORS.dark,
                    },
                  ]}
                >
                  <Ionicons
                    name="star"
                    size={SPACING * 3}
                    color={COLORS.primary}
                  />
                </View>
                <View style={tw("mr-4")}>
                  <Text style={tw("uppercase text-xs")}>Ratings</Text>
                  <Text style={tw("font-bold text-base")}>
                    {tour.rating} out of 5
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={tw("text-dark")}>{tour.description}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={tw("absolute bottom-4 w-full")}>
        <TouchableOpacity
          style={tw(
            "bg-primary p-3 mx-4 rounded-full flex-row justify-center items-center"
          )}
        >
          <Text style={tw("text-white text-xl font-bold mr-24 ml-24")}>
            Book Now
          </Text>
          <Ionicons
            name="arrow-forward"
            size={SPACING * 3}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TourDetailsScreen;
