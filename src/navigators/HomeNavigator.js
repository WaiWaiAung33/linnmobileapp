import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

//import screens
import Home from "@screens/home/Home";

export default createAppContainer(
    createStackNavigator(
        {
           Home:{
               screen:Home,
               navigationOptions:()=>({
                   header:null
               })
           }
        },
        {
           initialRouteName:"Home"
        }
    )
);