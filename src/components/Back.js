import React from "react";
import {View,Image,StyleSheet} from "react-native";

export default class Back extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require("@images/backs.png")} style={styles.img}/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
    marginLeft:10
    },
    img:{
        width:30,
        height:30
    }
})
