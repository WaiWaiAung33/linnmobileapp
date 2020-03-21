import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from "react-native";
import HomeCard from "./component/HomeCard";

import { SliderBox } from "react-native-image-slider-box";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require("@images/promotions.png"),
        require("@images/Bg2.png"),
        require("@images/promotions.png")
      ]
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View>
              <Image source={require("@images/scanners.png")} />
              <Text>Scan</Text>
            </View>
            <View style={styles.searchBox}>
              <Image source={require("@images/search.png")} />
              <TextInput placeholder="Search in Shop" />
            </View>
            <Image
              source={require("@images/menu.png")}
              style={{ marginBottom: 20, marginLeft: 5 }}
            />
          </View>
          <View>
            <SliderBox
             circleLoop
              autoplay
               images={this.state.images}
               />
          </View>
          

          {/* <Image
              style={{ width: "90%" }}
              source={require("@images/promotions.png")}
            /> */}
        </View>
        <ScrollView>
        <View style={styles.type}>
          <View>
            <ImageBackground
              source={require("@images/phoneback.png")}
              style={styles.imageBackground}
            >
              <Image source={require("@images/phone.png")} />
            </ImageBackground>
            <Text>Phone</Text>
          </View>
          <View>
            <ImageBackground
              source={require("@images/tabletback.png")}
              style={styles.imageBackground}
            >
              <Image
                source={require("@images/tablet.png")}
                style={{ width: 30, height: 20 }}
              />
            </ImageBackground>
            <Text>Tablet</Text>
          </View>

          <View>
            <ImageBackground
              source={require("@images/computer.png")}
              style={styles.imageBackground}
            >
              <Image
                source={require("@images/computerback.png")}
                style={{ width: 30, height: 20 }}
              />
            </ImageBackground>
            <Text>Computer</Text>
          </View>

          <View>
            <ImageBackground
              source={require("@images/printerback.png")}
              style={styles.imageBackground}
            >
              <Image
                source={require("@images/printer.png")}
                style={{ width: 30, height: 25 }}
              />
            </ImageBackground>
            <Text>Printer</Text>
          </View>

          <View>
            <ImageBackground
              source={require("@images/electronicback.png")}
              style={styles.imageBackground}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("@images/electronicss.png")}
                  style={{ width: 15, height: 15, marginTop: 10 }}
                />
                <Image
                  source={require("@images/electronic1.png")}
                  style={{ width: 15, height: 25, marginLeft: 5 }}
                />
              </View>
            </ImageBackground>
            <Text>Electronic</Text>
          </View>

          <View>
            <ImageBackground
              source={require("@images/moreback.png")}
              style={styles.imageBackground}
            >
              <Image
                source={require("@images/more.png")}
                style={{ width: 20, height: 15 }}
              />
            </ImageBackground>
            <Text>More</Text>
          </View>
        </View>
       
          <HomeCard />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 25
    // alignItems: "center"
  },
  header: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  searchBox: {
    // margin: 0,
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    minHeight: 30,
    padding: 5,
    borderRadius: 5,
    borderColor: "#707070",
    marginBottom: 20,
    width: "80%"
  },
  imageBackground: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  type: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
