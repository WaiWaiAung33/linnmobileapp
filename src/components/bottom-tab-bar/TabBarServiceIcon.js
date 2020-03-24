import React from "react";
import {View,Image,StyleSheet,Text} from "react-native";

export default class TabBarServiceIcon extends React.Component{
    render(){
        return(
            <View>
                <Image source={require("@icons/service.png")} style={styles.img}/>
                <Text>Service</Text>
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