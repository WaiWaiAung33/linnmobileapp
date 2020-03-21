import React from 'react';
import { StyleSheet,View,ScrollView } from 'react-native';

//import component 
import PromotionCard from "./component/PromotionCard";

export default class Promotion extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <PromotionCard/>
        
         </ScrollView>
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  // title:{
  //   flexDirection:"row",
  //   backgroundColor:"white",
  //   padding:10,
  //   borderRadius:10
  //  },
  // imgBack:{
  //   width:40,
  //   height:40,
  //   alignItems:"center",
  //   justifyContent:"center"
  // }
});
