import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";


export default class Radio extends React.Component {

  setToggle() {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.setToggle()}
        >
          <View style={styles.radioContainer}>
            <View style={styles.largeCirle}>
              {/* {this.props.active ? ( */}
                <View style={styles.activeCirle} />
              {/* ) : null} */}
            </View>
            <Text style={styles.label}>
              {this.props.label ? this.props.label : null}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    marginRight: 20
  },
  largeCirle: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderColor:"gray",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center"
  },
  activeCirle: {
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor:"black",
  },
  label: {
    marginLeft:5,
    color:"black",
   
  }
});
