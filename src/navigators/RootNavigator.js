import React from "react";
import {createAppContainer,createSwitchNavigator} from "react-navigation";

//import screens
import AccountNavigator from "@navigators/AccountNavigator";
import UserNavigator from "@navigators/UserNavigator";

export default createAppContainer(
    createSwitchNavigator(
        {
          AccountNavigator:{
              screen:AccountNavigator,
          },
          UserNavigator:{
              screen:UserNavigator,
          }
        },
        {
            initialRouteName:"AccountNavigator"
        }
    )
);