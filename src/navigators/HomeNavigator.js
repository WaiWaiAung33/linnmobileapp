import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

//import screens
import Home from "@screens/home/Home";
import PhoneProduct from "@screens/home/PhoneProducts";
// import PhoneDrawer from "./PhoneDrawerNavigator";
import Category from "@screens/home/Category";

export default createAppContainer(
    createStackNavigator(
        {
           Home:{
               screen:Home,
               navigationOptions:()=>({
                   headerShown:false
               })
           },
           PhoneProduct:{
               screen:PhoneProduct,
               navigationOptions:()=>({
                   headerShown:false
               })
           },
           Category:{
            screen:Category,
            navigationOptions:()=>({
                headerShown:false
            })
          },
       
        },
        {
           initialRouteName:"Home"
        }
    )
);