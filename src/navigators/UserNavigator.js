import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

//import screens

import PromotionNavigator from "./PromotionNavigator";
import ServiceNavigator from "./ServiceNavigator";

import HomeNavigator from "./HomeNavigator";
import UserAccountNavigator from "./UserAccountNavigator";
import CartNavigator from "./CartNavigator";

import { Image, StyleSheet } from "react-native";

export default createAppContainer(
  createBottomTabNavigator(
    {
      PromotionNavigator: {
        screen: PromotionNavigator,
        navigationOptions: () => ({
          tabBarLabel: "Promotion",
          // title: "Promotion",
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              source={require("@icons/promotion.png")}
              style={[styles.img, { tintColor }]}
            />
          )
        })
      },
      CartNavigator: {
        screen: CartNavigator,
        navigationOptions: () => ({
          tabBarLabel: "Cart",
          // title: "Cart",
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              source={require("@icons/cart.png")}
              style={[styles.img, { tintColor }]}
            />
          )
        })
      },

      HomeNavigator: {
        screen: HomeNavigator,
        navigationOptions: () => ({
          tabBarLabel: "Home",
          // title: "Home",
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              source={require("@icons/homes.png")}
              style={[styles.img, { tintColor }]}
            />
          )
        })
      },
      ServiceNavigator: {
        screen: ServiceNavigator,
        navigationOptions: () => ({
          tabBarLabel: "Service",
          // title: "Service",
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              source={require("@icons/service.png")}
              style={[styles.img, { tintColor }]}
            />
          )
        })
      },
      UserAccountNavigator: {
        screen: UserAccountNavigator,
        navigationOptions: () => ({
          tabBarLabel: "Account",
          // title: "Account",
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              source={require("@icons/account.png")}
              style={[styles.img, { tintColor }]}
            />
          )
        })
      }
    },
    {
      initialRouteName: "HomeNavigator",
      tabBarOptions: {
        style: { height: 70, backgroundColor: "#F4F4F4" },
        activeTintColor: "#0757F5",
        labelStyle: { marginBottom: 15 }
        // tabStyle:{height:60},
      }
    }
  )
);
const styles = StyleSheet.create({
  img: {
    marginTop: 10
  }
});
