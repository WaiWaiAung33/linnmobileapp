import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";

export default class Promotion extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ margin: 10 }}>
            <View style={styles.title}>
              <ImageBackground
                source={require("@images/moreback.png")}
                style={styles.imgBack}
              >
                <Image
                  source={require("@images/speaker.png")}
                  style={{ width: 20, height: 20 }}
                />
              </ImageBackground>
              <View style={{ marginLeft: 10 }}>
                <Text>15th Anniversary Celebration </Text>
                <Text>Yesterday </Text>
                <Image
                  source={require("@images/promotions.png")}
                  style={{ width: 250, borderRadius: 5 }}
                />
                <Text style={{ width: 200 }}>
                  Buy 10000ks, get I Coupons and take a new car! And More
                </Text>
              </View>
            </View>
          </View>
          <View style={{ margin: 10 }}>
            <View style={styles.title}>
              <ImageBackground
                source={require("@images/moreback.png")}
                style={styles.imgBack}
              >
                <Image
                  source={require("@images/speaker.png")}
                  style={{ width: 20, height: 20 }}
                />
              </ImageBackground>

              <View style={{ marginLeft: 10 }}>
                <Text>Chat</Text>
                <Text>12:15am</Text>
                <Text>How will be cost ?</Text>
              </View>
            </View>
          </View>
          <View style={{ margin: 10 }}>
            <View style={styles.title}>
              <ImageBackground
                source={require("@images/moreback.png")}
                style={styles.imgBack}
              >
                <Image
                  source={require("@images/speaker.png")}
                  style={{ width: 20, height: 20 }}
                />
              </ImageBackground>
              <View>
                <View style={{ marginLeft: 10 }}>
                  <Text>On the way to ware house </Text>
                  <Text>12/03/2020</Text>
                </View>
                <View
                  style={styles.thirdContainer}
                >
                  <Image source={require("@images/JBL2.png")} />
                  <View style={{marginTop:10}}>
                    <Text>JBL Speaker</Text>
                    <Text style={{ width: 150 }}>
                      JBL is the American company that manufactures audio
                      equipment
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
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
    width: 50,
    height: 50,
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
