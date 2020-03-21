import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
//import Screens
import All from "@screens/useraccount/All";
import MyRetrun from "@screens/useraccount/MyReturn";
import ToPay from "@screens/useraccount/ToPay";
import ToReceive from "@screens/useraccount/ToReceive";

//import React
import React from "react";
import { Image, StyleSheet,ImageBackground,View} from "react-native";

export default createAppContainer(
  createMaterialTopTabNavigator(
    {
      All: {
        screen:All,
        navigationOptions: () => ({
         tabBarLabel:"All"
        })
      },
      ToPay: {
        screen: ToPay,
        navigationOptions: {
          tabBarLabel: "To Pay",
     
        }
      },
      ToReceive: {
        screen: ToReceive,
        navigationOptions: {
          tabBarLabel: "To Receive",
      
        }
      },
      MyRetrun: {
        screen: MyRetrun,
        navigationOptions: {
          tabBarLabel: "My Return",
        }
      }
    },

    {
      initialRouteName: "All",
      tabBarOptions: {
        showIcon: true,
        showLabel: true,
        activeTintColor: "red",
        inactiveTintColor: "black",
        // scrollEnabled: true,
        upperCaseLabel: false,
        style: {
          backgroundColor: "#F2F2F2",
        },
        labelStyle: {
          fontSize: 11,
          // color:'red',
          alignItems:'center',
        },
        indicatorStyle: {
          // width: 500,
          backgroundColor: "red",
          // height: 3
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
