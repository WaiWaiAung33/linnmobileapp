import React from "react";
import {View,Image,StyleSheet,Text} from "react-native";

export default class TabBarHomeIcon extends React.Component{
    render(){
        return(
            <View>
                <Image source={require("@icons/homes.png")} style={styles.img}/>
                <Text>Home</Text>
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