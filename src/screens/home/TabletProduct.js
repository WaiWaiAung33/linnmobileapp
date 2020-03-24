import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput
} from "react-native";

const {width}=Dimensions.get("window");

export default class Category extends React.Component {
  render() {
    return (
      <View style={styles.container}>

          <View style={styles.searchBox}>
              <Image source={require("@images/search.png")} />
              <TextInput placeholder="Search in Shop" />
            </View>


        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.popularContainer}>
              <Text style={{ color: "#BCFF00", fontWeight: "bold" }}>
                Huwei
              </Text>
            </View>

            <Image
              source={require("@images/note7.png")}
              style={{ marginTop: 10 }}
            />
          </View>
          <View style={styles.card}>
            <View style={styles.popularContainer}>
              <Text style={{ color: "#0088FF", fontWeight: "bold" }}>
                Oppo
              </Text>
            </View>

            <Image
              source={require("@images/laptopPC.png")}
              style={{ marginTop: 10 }}
            />
          </View>
          <View style={styles.card}>
            <View style={styles.popularContainer}>
              <Text style={{ color: "#FFC400", fontWeight: "bold" }}>
                 Samsung
              </Text>
            </View>

            <Image
              source={require("@images/electronic.png")}
              style={{ marginTop: 10 }}
            />
          </View>

          <View style={styles.card}>
            <View style={styles.popularContainer}>
              <Text style={{ color: "#BCFF00", fontWeight: "bold" }}>
               Honor
              </Text>
            </View>

            <Image
              source={require("@images/note7.png")}
              style={{ marginTop: 10 }}
            />
          </View>
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: width /2 -50,
    padding:15,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5
  },
  cardContainer: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
    marginTop: 10,
    flexWrap: "wrap",
  },
  popularContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  searchBox: {
    marginTop:20,
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    minHeight: 30,
    padding: 5,
    borderRadius: 5,
    borderColor: "#707070",
    // marginBottom: 20,
    width: "80%"
  },
});
