import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

//import screens
import Cart from "@screens/cart/Cart";

export default createAppContainer(
    createStackNavigator(
        {
          Cart:{
              screen:Cart,
              navigationOptions:()=>({
                  header:null
              })
          }
        },
        {
            initialRouteName:"Cart"
        }
    )
);