import React from "react";
import {View,Image,StyleSheet,Text} from "react-native";

export default class TabBarPromotionIcon extends React.Component{
    render(){
        return(
            <View>
                <Image source={require("@icons/promotion.png")} style={styles.img}/>
                <Text>Promotion</Text>
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