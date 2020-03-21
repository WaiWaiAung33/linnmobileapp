import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground,ScrollView } from 'react-native';

export default class Promotion extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={{margin:10}}>
        <View style={styles.title}>
          <ImageBackground source={require("@images/moreback.png")} style={styles.imgBack}>
            <Image source={require("@icons/settings.png")} style={{width:20,height:20}}/>
          </ImageBackground>
         <View style={{marginLeft:10}}>
          <Text>15th Anniversary Celebration </Text>
          <Text>Yesterday </Text>
          <Image source={require("@images/promotions.png")} style={{width:250,borderRadius:10}} />
          <Text style={{width:200}}>Buy 10000ks, get I Coupons and take a new car! And More</Text>
         </View>
        </View>
        </View>
        <View style={{margin:10}}>
         <View style={styles.title}>
         <ImageBackground source={require("@images/printerback.png")} style={styles.imgBack}>
            <Image source={require("@icons/settings.png")} style={{width:20,height:20}}/>
          </ImageBackground>
         
         <View style={{marginLeft:10}}>
            <Text>500 Points</Text>
            <Text>12:15am</Text>
            <Image source={require("@images/note9.png")}/>
         </View>
         </View>
         </View>
         <View style={{margin:10}}>
          <View style={styles.title}>
          <ImageBackground source={require("@images/computer.png")} style={styles.imgBack}>
            <Image source={require("@icons/settings.png")} style={{width:20,height:20}}/>
          </ImageBackground>
          <View style={{marginLeft:10}}>
            <Text>65 Luncky draw Coupons</Text>
            <Text>12/03/2020</Text>
          </View>
          </View>
         </View>
       
      
         </ScrollView>
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
    backgroundColor:"white",
    padding:10,
    borderRadius:10
   },
  imgBack:{
    width:40,
    height:40,
    alignItems:"center",
    justifyContent:"center"
  }
});
