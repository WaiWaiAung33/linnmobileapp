import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native';

export default class Promotion extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <ImageBackground source={require("@images/moreback.png")} style={styles.imgBack}>
            <Image source={require("@images/speaker.png")} style={{width:20,height:20}}/>
          </ImageBackground>
         <View style={{margin:20}}>
          <Text>15th Anniversary Celebration </Text>
          <Text>Yesterday </Text>
          <Image source={require("@images/promotions.png")}/>
         </View>
        </View>
        
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title:{
    flexDirection:"row",
 
   
  },
  imgBack:{
    width:50,
    height:50,
    alignItems:"center",
    justifyContent:"center"
  }
});
