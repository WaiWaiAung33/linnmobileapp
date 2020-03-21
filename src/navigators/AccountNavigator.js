import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

//import screen
import Login from "@screens/account/Login";
import Register from "@screens/account/Register";

export default createAppContainer(
    createStackNavigator(
        {
         Login:{
             screen:Login,
             navigationOptions:()=>({
                 headerShown:false
             })

         },
         Register:{
             screen:Register,
             navigationOptions:()=>({
                headerShown:false
             })
         }
        },
        {
          initialRouteName:"Login"
        }
    )
);