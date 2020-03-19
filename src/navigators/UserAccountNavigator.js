import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

//import screen
import Account from "@screens/useraccount/Account";

export default createAppContainer(
    createStackNavigator(
        {
         Account:{
             screen:Account,
             navigationOptions:()=>({
                 header:null
             })
         }
        },
        {
          initialRouteName:"Account"
        }
    )
);