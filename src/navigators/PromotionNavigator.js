import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

//import screens
import PromotionTopTabNavigator from "./PromotionTopTabNavigator";

export default createAppContainer(
    createStackNavigator(
        {
            PromotionTopTabNavigator:{
              screen:PromotionTopTabNavigator,
              navigationOptions:()=>({
                  title:"Promorion",
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