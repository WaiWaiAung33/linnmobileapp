import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
//import Screens
import Promotion from "@screens/promotion/Promotion";
import MyPoint from "@screens/promotion/MyPoint";
import MyCoupons from "@screens/promotion/MyCoupons";
import PromoSilent from "@screens/promotion/PromoSilent";

//import React
import React from "react";
import { Image, StyleSheet,ImageBackground,View} from "react-native";

export default createAppContainer(
  createMaterialTopTabNavigator(
    {
      Promotion: {
        screen: Promotion,
        navigationOptions: () => ({
          tabBarLabel: "Promo",
          tabBarIcon: ({ focused, tintColor }) => (
            <View style={{alignItems:'center',justifyContent:'center',marginBottom:10}}>
            <ImageBackground
              source={require("@images/printerback.png")}
              style={{width:35,height:35,alignItems:'center',justifyContent:'center'}}
            >
              <Image
                source={require("@images/electronicss.png")}
                style={{width:15,height:15,}}
              />
            </ImageBackground>
            </View>
          )
        })
      },
      MyPoint: {
        screen: MyPoint,
        navigationOptions: {
          tabBarLabel: "My Point",
          tabBarIcon: ({ focused, tintColor }) => (
            <View style={{alignItems:'center',justifyContent:'center',marginBottom:10}}>
            <ImageBackground
              source={require("@images/printerback.png")}
              style={{width:35,height:35,alignItems:'center',justifyContent:'center'}}
            >
              <Image
                source={require("@images/electronicss.png")}
                style={{width:15,height:15,}}
              />
            </ImageBackground>
            </View>
          )
        }
      },
      MyCoupons: {
        screen: MyCoupons,
        navigationOptions: {
          tabBarLabel: "My Coupons",
          tabBarIcon: ({ focused, tintColor }) => (
            <View style={{alignItems:'center',justifyContent:'center',marginBottom:10}}>
            <ImageBackground
              source={require("@images/printerback.png")}
              style={{width:35,height:35,alignItems:'center',justifyContent:'center'}}
            >
              <Image
                source={require("@images/electronicss.png")}
                style={{width:15,height:15,}}
              />
            </ImageBackground>
            </View>
          )
        }
      },
      PromoSilent: {
        screen: PromoSilent,
        navigationOptions: {
          tabBarLabel: "Promo",
          tabBarIcon: ({ focused, tintColor }) => (
            <View style={{alignItems:'center',justifyContent:'center',marginBottom:10}}>
            <ImageBackground
              source={require("@images/printerback.png")}
              style={{width:35,height:35,alignItems:'center',justifyContent:'center'}}
            >
              <Image
                source={require("@images/electronicss.png")}
                style={{width:15,height:15,}}
              />
            </ImageBackground>
            </View>
          )
        }
      }
    },

    {
      initialRouteName: "Promotion",
      tabBarOptions: {
        showIcon: true,
        showLabel: true,
        activeTintColor: "black",
        inactiveTintColor: "black",
        // scrollEnabled: true,
        upperCaseLabel: false,
        style: {
          backgroundColor: "white",
        },
        labelStyle: {
          fontSize: 11,
          // color:'red',
          alignItems:'center',
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
