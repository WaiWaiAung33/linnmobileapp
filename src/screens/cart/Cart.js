import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

//import component
import Radio from "@components/Radio";
import Card from "./component/Card";

export default class Cart extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
        <View style={styles.secondContainer}>
          <View style={styles.header}>
            <View style={{ marginHorizontal: "35%" }}>
              <Text style={styles.text}>My Cart</Text>
            </View>

            <TouchableOpacity>
              <Text style={{ color: "white" }}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Card/>
        {/* <ScrollView>
        <View style={styles.thirdContainer}>
          <Radio />
          <Image source={require("@images/note9.png")} />
          <View style={{ margin: 10 }}>
            <Text>Samsung Note8</Text>
            <Text style={{ textAlign: "justify", width: 250 }}>
              6.4 inches,Super AMOLED capacitive touchscreen,16M Colour
            </Text>
            <Text style={{ color: "#FC8069" }}>Only 1 item in Stock</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ marginTop: 10, color: "#FC8069" }}>
                750,000 ks
              </Text>
              <Text style={{ marginTop: 10 }}>Qty 1</Text>
            </View>
          </View>
        </View>

        <View style={styles.thirdContainer}>
          <Radio />
          <Image
            source={require("@images/JBL2.png")}
            style={{ width: 100, height: 100 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text>JBL Speaker</Text>
            <Text style={{ textAlign: "justify", width: 250 }}>
              JBL is an American company that manufactures audio equipment,
            </Text>
            <Text style={{ color: "#FC8069", marginTop: 10 }}>50,000ks</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ textDecorationLine: "line-through" }}>
                75,000ks
              </Text>
              <Text style={{ marginLeft: 10 }}>-35%</Text>
              <Text>Qty 1</Text>
            </View>
          </View>
        </View>
        </ScrollView> */}
        <View style={styles.bottomCard}>
          <View style={styles.bottom}>
            <View style={{marginLeft:10}}>
            <Radio label="All" />
            </View>
           

            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text>Shopping:</Text>
              <Text>Total:</Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={{color:"#FC8069"}}>500ks</Text>
              <Text style={{color:"#FC8069",fontWeight:"bold"}}>750,000ks</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end", marginRight: 20 }}>
              <TouchableOpacity style={styles.checkout}>
                <Text style={{ color: "white" }}>Check Out</Text>
              </TouchableOpacity>
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
    backgroundColor:"white"
  },
  secondContainer: {
    height: "15%",
    backgroundColor: "#FC8069"
  },
  // thirdContainer: {
  //   flexDirection: "row",
  //   marginTop: 10,
  //   backgroundColor: "#F4F4F4",
  //   padding: 10,
  //   alignItems: "center"
  // },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "14%"
  },
  text: {
    color: "white",
    textAlign: "center"
  },
  checkout: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBA938",
    width: 80,
    height: 30,
    borderRadius: 5
  },
  bottomCard: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor: "#EBE8E8",
    // margin: 10,
    backgroundColor:"#F4F4F4"
  }
});
