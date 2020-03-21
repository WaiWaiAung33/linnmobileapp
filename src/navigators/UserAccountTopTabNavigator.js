import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
//import Screens
import Message from "@screens/useraccount/Message";
import Orders from "@screens/useraccount/Orders";
import Notification from "@screens/useraccount/Notification";
import Promo from "@screens/useraccount/Promo";

//import React
import React from "react";
import { Image, StyleSheet, ImageBackground,View} from "react-native";

export default createAppContainer(
  createMaterialTopTabNavigator(
    {
      Message: {
        screen: Message,
        navigationOptions: () => ({
          // header:null,
          title: "Chats",
          tabBarIcon: ({ focused, tintColor }) => (
            <View style={{alignItems:'center',justifyContent:'center',marginBottom:10}}>
            <ImageBackground
              source={require("@icons/chartback.png")}
              style={{width:35,height:35,alignItems:'center',justifyContent:'center'}}
            >
              <Image
                source={require("@icons/chat.png")}
                style={{width:15,height:15,}}
              />
            </ImageBackground>
            </View>
          )
        })
      },
      Orders: {
        screen: Orders,
        navigationOptions: () => ({
          // header:null,
          title: "Orders",
          tabBarIcon: ({ focused, tintColor }) => (
            <View style={{alignItems:'center',justifyContent:'center',marginBottom:10}}>
            <ImageBackground
              source={require("@icons/orderback.png")}
              style={{width:35,height:35,alignItems:'center',justifyContent:'center'}}
            >
              <Image
                source={require("@icons/order.png")}
                style={{width:15,height:15,}}
              />
            </ImageBackground>
            </View>
          )
        })
      },
      Notification: {
        screen: Notification,
        navigationOptions: () => ({
          // header:null,
          title: "Notification",
          headerTitleStyle: {
            fontSize:12,
          },
          tabBarIcon: ({ focused, tintColor }) => (
            <View style={{alignItems:'center',justifyContent:'center',marginBottom:10}}>
            <ImageBackground
              source={require("@icons/notiback.png")}
              style={{width:35,height:35,alignItems:'center',justifyContent:'center'}}
            >
              <Image
                source={require("@icons/noti.png")}
                style={{width:15,height:15,}}
              />
            </ImageBackground>
            </View>
          )
        })
      },
      Promo: {
        screen: Promo,
        navigationOptions: () => ({
          // header:null,
          title: "Promo",
          tabBarIcon: ({ focused, tintColor }) => (
            <View style={{alignItems:'center',justifyContent:'center',marginBottom:10}}>
            <ImageBackground
              source={require("@icons/promoback.png")}
              style={{width:35,height:35,alignItems:'center',justifyContent:'center'}}
            >
              <Image
                source={require("@icons/speakers.png")}
                style={{width:15,height:15,}}
              />
            </ImageBackground>
            </View>
          )
        })
      }
    },

    {
      initialRouteName: "Message",
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
