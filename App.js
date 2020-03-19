import React from 'react';
import RootNavigator from "@navigators/RootNavigator";
import * as Font from "expo-font";
import {View,ActivityIndicator,StyleSheet} from "react-native";

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount(){
    await Font.loadAsync({
      "Fertigo_PRO":require("@fonts/Fertigo_PRO.otf"),
      
    });
    this.setState({fontLoaded:true});
  }

  render(){
    if(this.state.fontLoaded){
      return(
        <RootNavigator/>
      );
    }else{
      return (
        <View style={styles.container}>
         <ActivityIndicator size="large"></ActivityIndicator>
        </View>
      );
    }
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
