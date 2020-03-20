import React from "react";
import {View,Image,StyleSheet} from "react-native";

export default class TabBarCartIcon extends React.Component{
    render(){
        return(
            <View>
                <Image  source={require("@icons/cart.png")} style={styles.img}/>
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