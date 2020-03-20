import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

//import screens

import PromotionNavigator from "./PromotionNavigator";
import ServiceNavigator from "./ServiceNavigator";

import HomeNavigator from "./HomeNavigator";
import UserAccountNavigator from "./UserAccountNavigator";
import CartNavigator from "./CartNavigator";

import {Image,StyleSheet} from "react-native";

export default createAppContainer(
  createBottomTabNavigator(
    {
      PromotionNavigator: {
        screen: PromotionNavigator,
        navigationOptions: () => ({
          title: "Promotion",
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              source={require("@icons/promotion.png")}
              style={styles.img}
            />
          )
        })
      },
      CartNavigator: {
        screen: CartNavigator,
        navigationOptions: () => ({
          title: "Cart",
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              source={require("@icons/cart.png")}
              style={styles.img}
            />
          )
        })
      },
      

      HomeNavigator: {
        screen: HomeNavigator,
        navigationOptions: () => ({
          title: "Home",
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              source={require("@icons/home.png")}
              style={styles.img}
            />
          )
        })
      },
      ServiceNavigator: {
        screen: ServiceNavigator,
        navigationOptions: () => ({
          title: "Service",
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              source={require("@icons/service.png")}
              style={styles.img}
            />
          )
        })
      },
      UserAccountNavigator: {
        screen: UserAccountNavigator,
        navigationOptions: () => ({
          title: "Account",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@icons/account.png")}
              style={styles.img}
            />
          )
        })
      },
     
    },
    {
      initialRouteName: "HomeNavigator",
      tabBarOptions:{
        style:{height:70,backgroundColor:"#F4F4F4"},
        // tabStyle:{height:60}
      }
    }
  )
);
const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30
  }
});
