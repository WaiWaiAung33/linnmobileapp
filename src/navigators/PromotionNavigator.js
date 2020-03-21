import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

//import screens
import PromotionTopTabNavigator from "./PromotionTopTabNavigator";

//import component
import Back from "@components/Back"

export default createAppContainer(
    createStackNavigator(
        {
            PromotionTopTabNavigator:{
              screen:PromotionTopTabNavigator,
              navigationOptions:()=>({
                  title:"Promotion",
                //   headerLeft:()=><Back/>,
                  headerStyle: {elevation: 0,shadowOpacity:0},
                  headerTitleAlign: {
                    alignItems: "center",
                    justifyContent: "center"
                  },
              })
          }
        },
        {
            initialRouteName:"PromotionTopTabNavigator"
        }
    )
);