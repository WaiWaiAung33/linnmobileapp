import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

//import screen
import Account from "@screens/useraccount/Account";
import Boucher from "@screens/useraccount/Boucher";
// import Message from "@screens/useraccount/Message";

//import navigator
import UserAccountNavigator from "./UserAccountTopTabNavigator";

export default createAppContainer(
    createStackNavigator(
        {
         Account:{
             screen:Account,
             navigationOptions:()=>({
                 header:null
             })
         },
         Boucher:{
            screen:Boucher,
            navigationOptions:()=>({
                header:null
            })
        },
        UserAccountNavigator:{
            screen:UserAccountNavigator,
            navigationOptions: {
                title: "Message",
                headerStyle: {elevation: 0},
                headerTitleAlign:{
                    justifyContent:'center',
                    alignItem:'center',
                },
                headerTitleStyle: {
                  color: "black",
                  textAlign: "center",
                  width: 250,
                  fontSize:16,
                  fontWeight:"300",
                },
              }
        }
        // Message: {
        //     screen: Message,
        //     navigationOptions: () => ({
        //       title: "Message",
        //       headerStyle: { backgroundColor: "#27C79D", textAlignVertical:'center' },
            //   headerTitleAlign:{
            //       justifyContent:'center',
            //       alignItem:'center',
            //   },
            //   headerTitleStyle: {
            //     color: "black",
            //     textAlign: "center",
            //     width: 250,
            //     fontSize:16,
            //     fontWeight:"300",
            //   },
        //     //   headerLeft:null,
        //       // header:null,
        //     })
        //   }
        },
        {
          initialRouteName:"Account"
        }
    )
);