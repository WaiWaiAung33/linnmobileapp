import React from "react";
import {View,Image,StyleSheet} from "react-native";

export default class TabBarAccountIcon extends React.Component{
    render(){
        return(
            <View>
                <Image  source={require("@icons/account.png")} style={styles.img}/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    img:{
        width:30,
        height:30
    }
})