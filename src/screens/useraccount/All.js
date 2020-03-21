import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class All extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ margin: 20 }}>
          <Text>Order 345635667></Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.text}>Paid On 05 Feb 2020 07:10:30</Text>
            <Text style={styles.text}>Paid</Text>
          </View>
          <View style={styles.card}>
            <Image source={require("@images/note9.png")} />
            <View style={{ margin: 10 }}>
              <Text style={{ width: 230 }}>
                Get Samsung Galaxy Note 9 Here Today. Trusted By Millions of
                Customers.
              </Text>
              <Text>750,000ks</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>x1</Text>
                <TouchableOpacity style={styles.touchBtn}>
                  <Text style={styles.textBtn}>DownLoad></Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <Image source={require("@images/JBL2.png")} style={{width:100,height:100}}/>
            <View style={{ margin: 10 }}>
              <Text style={{ width: 230 }}>
                Get Samsung Galaxy Note 9 Here Today. Trusted By Millions of
                Customers.
              </Text>
              <Text>750,000ks</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>x1</Text>
                <TouchableOpacity style={styles.touchBtn}>
                  <Text style={styles.textBtn}>DownLoad></Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>


        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  text: {
    color: "#BBBABA"
    // fontWeight:"bold"
  },
  touchBtn: {
    backgroundColor: "#098B9D",
    width: 100,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  card:{
       flexDirection: "row",
        marginTop: 10
     },
     textBtn:{
         color:"white"
     }
});
