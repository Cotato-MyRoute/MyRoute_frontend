import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductScreen from "../pages/ProductScreen";
import CommunityScreen from "../pages/CommunityScreen";
import FavoriteScreen from "../pages/FavoritesScreen";
import HomeScreen from "../pages/HomeScreen";
import MapScreen from "../pages/MapScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Tab.Navigator
        initialRouteName="StartScreen"
        screenOptions={() => ({
          tabBarStyle: {
            backgroundColor: "#bcbcbc",
            height: 60,
            width: "100%",
          },
        })}
      >
        <Tab.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerShown: false,
            tabBarLabel: "지도",
            tabBarLabelStyle: {
              fontSize: 12,
              color: "#FFFFFF",
              top: -12,
            },
            tabBarIcon: ({ focused }) => (
              <Image
                source={{
                  uri: "https://velog.velcdn.com/images/kkaerrung/post/5bd78097-aebb-48ac-91b5-8a9b9ccd7e9f/image.png",
                }}
                style={{
                  top: 0,
                  width: 7,
                  height: 7,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name={"ProductScreen"}
          component={ProductScreen}
          options={{
            headerShown: false,
            tabBarLabel: "상품",
            tabBarLabelStyle: {
              fontSize: 12,
              color: "#FFFFFF",
              top: -12,
            },
            tabBarIcon: ({ focused }) => (
              <Image
                source={{
                  uri: "https://velog.velcdn.com/images/kkaerrung/post/5bd78097-aebb-48ac-91b5-8a9b9ccd7e9f/image.png",
                }}
                style={{
                  top: 0,
                  width: 7,
                  height: 7,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="StartScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <Image
                source={{
                  uri: "https://velog.velcdn.com/images/kkaerrung/post/99d0d8cb-918b-42b0-8687-85e60baaac77/image.png",
                }}
                style={{
                  top: 0,
                  width: 69,
                  height: 69,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name={"FavoriteScreen"}
          component={FavoriteScreen}
          options={{
            headerShown: false,
            tabBarLabel: "좋아요",
            tabBarLabelStyle: {
              fontSize: 12,
              color: "#FFFFFF",
              top: -12,
            },
            tabBarIcon: ({ focused }) => (
              <Image
                source={{
                  uri: "https://velog.velcdn.com/images/kkaerrung/post/5bd78097-aebb-48ac-91b5-8a9b9ccd7e9f/image.png",
                }}
                style={{
                  top: 0,
                  width: 7,
                  height: 7,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="CommunityScreen"
          component={CommunityScreen}
          options={{
            headerShown: false,
            tabBarLabel: "커뮤니티",
            tabBarLabelStyle: {
              fontSize: 12,
              color: "#FFFFFF",
              top: -12,
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: "https://velog.velcdn.com/images/kkaerrung/post/5bd78097-aebb-48ac-91b5-8a9b9ccd7e9f/image.png",
                }}
                style={{
                  top: 0,
                  width: 7,
                  height: 7,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    paddingBottom: 0,
  },
});
