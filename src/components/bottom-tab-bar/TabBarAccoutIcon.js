import React from "react";
import {View,Image,StyleSheet,Text} from "react-native";

export default class TabBarAccountIcon extends React.Component{
    render(){
        return(
            <View>
                <Image  source={require("@icons/account.png")} style={styles.img}/>
                <Text>Account</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    img:{
        // width:30,
        // height:30
    }
})