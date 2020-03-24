import React from "react";
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";

//import screen
import HuweiProduct from "@screens/home/HuweiProduct";
import Category from "@screens/home/Category";


export default createAppContainer(
    createDrawerNavigator(
    {
        Category:{
          screen:Category,
          navigationOptions:()=>({
              drawerLabel:"Category"
          })
        },
      HuweiProduct:{
          screen:HuweiProduct,
          navigationOptions:()=>({
             drawerLabel:"Mobile Phone"
          })
      },
     
    },
    {
        initialRouteName:"Category",
        // drawerWidth:250,
        statusBarAnimation:true,
         hideStatusBar:true,
        drawerBackgroundColor:"#0068D8",
        contentOptions:{
            activeTintColor:"#00D4E0",
            inactiveTintColor:"white",
         
        }
    }
    )
)