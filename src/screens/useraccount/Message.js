import React from "react";
import {
  StyleSheet,
  View,
  ScrollView
} from "react-native";

//import component
import MessageCard from "./component/MessageCard";

export default class Promotion extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <MessageCard/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10
  },
  imgBack: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  thirdContainer:{
    backgroundColor: "#C1C1C1",
    marginLeft: 10,
    width: 250,
    flexDirection: "row",
    padding: 10,
    borderRadius: 10
  }
});
