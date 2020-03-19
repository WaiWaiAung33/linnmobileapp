import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class Login extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <Image
            source={require("@icons/linnlogo.png")}
            style={styles.img}
          />
          <Text
            style={{ marginTop: 10, fontSize: 18 }}
          >
            IT,Mobile & Electronic Mart
          </Text>
          <Text
            style={{ marginTop: 30,fontSize: 15 }}
          >
            Please Login
          </Text>
          <TextInput style={styles.textInput} placeholder=" Enter your phone number"
          placeholderTextColor="#22B6EE"
          />
          <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate("Home")}
          style={styles.touch}>
            <Text
              style={{
                fontSize: 15,
                color: "#FFFFFF"
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <Text style={{ margin: 10, fontSize: 13 }}>
            or
          </Text>
          <TouchableOpacity
            style={styles.touchCreate}
            onPress={()=>this.props.navigation.navigate("Register")}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#FFFFFF"
              }}
            >
              Create New User
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  secondContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20%"
  },
  img: {
    width: 180,
    height: 100
  },
  textInput: {
    borderWidth: 1,
    margin: 10,
    width: 250,
    height: 45,
    borderRadius: 5,
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
    color: "#22B6EE",
    borderColor: "#22B6EE",

  },
  touch: {
    borderWidth: 1,
    width: 70,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0042F9",
    borderColor: "#0042F9"
  },
  touchCreate: {
    borderWidth: 1,
    width: 250,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#00F919",
    borderColor: "#00F919"
  }
});
