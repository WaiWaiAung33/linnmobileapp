import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

//import screens
import Service from "@screens/servicess/Service";

export default createAppContainer(
    createStackNavigator(
        {
            Service:{
                screen:Service,
                navigationOptions:()=>({
                    headerShown:false
                })
            }    
        },
        {
            initialRouteName:""
        }
    )
);