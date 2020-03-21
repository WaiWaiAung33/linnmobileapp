import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

//import screen
import Account from "@screens/useraccount/Account";
import Boucher from "@screens/useraccount/Boucher";
import ShopDetail from "@screens/useraccount/ShopDetail";
import OnlineDetail from "@screens/useraccount/OnlineDetail";
// import Message from "@screens/useraccount/Message";

//import components
import Back from "@components/Back";

//import navigator
import UserAccountNavigator from "./UserAccountTopTabNavigator";
import OrderNavigator from "./AccountOrderNavigation";

export default createAppContainer(
    createStackNavigator(
        {
         Account:{
             screen:Account,
             navigationOptions:()=>({
                 headerShown:false
             })
         },
         Boucher:{
            screen:Boucher,
            navigationOptions:()=>({
               headerShown:false
            })
        },
        ShopDetail:{
          screen:ShopDetail,
         navigationOptions:()=>({
             headerShown:false
         })
        },
        OnlineDetail:{
          screen:OnlineDetail,
          navigationOptions:()=>({
              headerShown:false
          })
        },
        OrderNavigator:{
           screen:OrderNavigator,
           navigationOptions:{
               title:"My Orders",
            //    headerLeft:()=><Back/>,
               headerStyle:{elevation:0,shadowOpacity:0,backgroundColor:"#F2F2F2"},
               headerTitleAlign:{
                   justifyContent:"center",
                   alignItem:"center"
               },
            
           }
        },
        UserAccountNavigator:{
            screen:UserAccountNavigator,
            navigationOptions: {
                title: "Message",
                // headerLeft:()=><Back/>,
                headerStyle: {elevation:0,shadowOpacity:0},
                headerTitleAlign:{
                    justifyContent:'center',
                    alignItem:'center',
                },
             
              }
        },
      
        },
        {
          initialRouteName:"Account"
        }
    )
);