import React from "react";
import {View,Text,Image,StyleSheet,ScrollView} from "react-native";

//import component
import Radio from "@components/Radio";

export default class Card extends React.Component{
    render(){
        return(
            <View>
              <ScrollView>
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
        </ScrollView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    thirdContainer: {
        flexDirection: "row",
        marginTop: 10,
        backgroundColor: "#F4F4F4",
        padding: 10,
        alignItems: "center"
      },
})
