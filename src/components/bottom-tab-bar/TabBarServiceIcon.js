import React from "react";
import {View,Image,StyleSheet} from "react-native";

export default class TabBarServiceIcon extends React.Component{
    render(){
        return(
            <View>
                <Image source={require("@icons/service.png")} style={styles.img}/>
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