import React from 'react';
import { StyleSheet, Text, View,Button,TouchableHighlight ,TouchableOpacity,TouchableWithoutFeedback} from 'react-native';

export default class Promo extends React.Component {
  constructor(props){ 
  super(props);
  this.state={
   
  }

  }

  render(){ 
  return (
    <View style={StyleSheet.container}>
         <Text>This is Promo Page</Text>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
 
});
