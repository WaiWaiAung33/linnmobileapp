import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
//import Screens
import Promotion from "@screens/promotion/Promotion";
import MyPoint from "@screens/promotion/MyPoint";
import MyCoupons from "@screens/promotion/MyCoupons";
import PromoSilent from "@screens/promotion/PromoSilent";

//import React
import React from "react";
import { Image, StyleSheet } from "react-native";

export default createAppContainer(
  createMaterialTopTabNavigator(
    {
      Promotion: {
        screen: Promotion,
        navigationOptions: () => ({
          tabBarLabel: "Promo",
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              source={require("@icons/promotion.png")}
              style={[styles.img, (color = { tintColor })]}
            />
          )
        })
      },
      MyPoint: {
        screen: MyPoint,
        navigationOptions: {
          tabBarLabel: "My Point"
        }
      },
      MyCoupons: {
        screen: MyCoupons,
        navigationOptions: {
          tabBarLabel: "My Coupons"
        }
      },
      PromoSilent: {
        screen: PromoSilent,
        navigationOptions: {
          tabBarLabel: "Promo"
        }
      }
    },

    {
      initialRouteName: "Promotion",
      tabBarOptions: {
        // showIcon: true,
        // showLabel: true,
        activeTintColor: "black",
        inactiveTintColor: "black",
        // scrollEnabled: true,
        upperCaseLabel: false,
        style: {
          backgroundColor: "white"
        },
        labelStyle: {
          fontSize: 15
        },
        indicatorStyle: {
          // width: 500,
          backgroundColor: "white",
          height: 3
        }
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
