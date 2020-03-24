import React from "react";
import {View,Image,StyleSheet,TouchableOpacity} from "react-native";

export default class Back extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("PhoneDrawer")}>
                <Image source={require("@images/more.png")} style={styles.img}/>
                </TouchableOpacity>
               
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
