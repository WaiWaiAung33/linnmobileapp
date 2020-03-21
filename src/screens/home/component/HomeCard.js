import React from "react";
import {View,Text,Image,StyleSheet,TouchableOpacity,ScrollView} from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default class HomeCard extends React.Component{
    render(){
        return(
            <View>
            <View style={styles.sale}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Happy Hour Sale
              </Text>
              <Text style={styles.bullet}>10</Text>
              <Text style={styles.bullet}>30</Text>
              <Text style={styles.bullet}>55</Text>
            </View>

            <TouchableOpacity>
              <Text style={{ color: "#F62222" }}>Shop More ></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.card}>
                <View style={styles.triangleContainer}>
                  <View style={styles.triangle} />
                  <View style={styles.square}>
                    <Text style={{ color: "white" }}>-30%</Text>
                  </View>
                </View>

                <Image source={require("@images/miTV.png")} />
                <View style={{ flexDirection: "row", margin: 10 }}>
                  <Text style={styles.sold}>5sold</Text>
                  <Text style={{ marginLeft: 5 }}>35,0000ks</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.triangleContainer}>
                  <View style={styles.triangle} />
                  <View style={styles.square}>
                    <Text style={{ color: "white" }}>-20%</Text>
                  </View>
                </View>

                <Image source={require("@images/SanDisk.png")} />
                <View style={{ flexDirection: "row", margin: 10 }}>
                  <Text style={styles.sold}>5sold</Text>
                  <Text style={{ marginLeft: 5 }}>35,0000ks</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.triangleContainer}>
                  <View style={styles.triangle} />
                  <View style={styles.square}>
                    <Text style={{ color: "white" }}>-25%</Text>
                  </View>
                </View>

                <Image source={require("@images/SanDisk.png")} />
                <View style={{ flexDirection: "row", margin: 10 }}>
                  <Text style={styles.sold}>5sold</Text>
                  <Text style={{ marginLeft: 5 }}>35,0000ks</Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={styles.sale}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Most Popular
            </Text>

            <TouchableOpacity>
              <Text style={{ color: "#F62222" }}>Shop More ></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.card}>
                <View style={styles.popularContainer}>
                  <Text style={{ color: "#BCFF00", fontWeight: "bold" }}>
                    Mobile Phone
                  </Text>
                  <Text style={{ color: "#BCFF00" }}>Top List</Text>
                </View>

                <Image
                  source={require("@images/note7.png")}
                  style={{ marginTop: 10 }}
                />
              </View>
              <View style={styles.card}>
                <View style={styles.popularContainer}>
                  <Text style={{ color: "#0088FF", fontWeight: "bold" }}>
                    Computer
                  </Text>
                  <Text style={{ color: "#0088FF" }}>Top Selling</Text>
                </View>

                <Image
                  source={require("@images/laptopPC.png")}
                  style={{ marginTop: 10 }}
                />
              </View>
              <View style={styles.card}>
                <View style={styles.popularContainer}>
                  <Text style={{ color: "#FFC400", fontWeight: "bold" }}>
                    Electronic
                  </Text>
                  <Text style={{ color: "#FFC400" }}>Best Buy</Text>
                </View>

                <Image
                  source={require("@images/electronic.png")}
                  style={{ marginTop: 10 }}
                />
              </View>
            </ScrollView>
          </View>

          <View style={styles.sale}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              New Arrival
            </Text>

            <TouchableOpacity>
              <Text style={{ color: "#F62222" }}>Shop More ></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.card}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10
                  }}
                >
                  <Image source={require("@images/milogo.png")} />
                  <Image source={require("@images/New.png")} />
                </View>
                <Image
                  source={require("@images/air.png")}
                  style={{ marginTop: 10 }}
                />
              </View>
              <View style={styles.card}>
                <View
                  style={{
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    marginTop: 10
                  }}
                >
                  <Image source={require("@images/New.png")} />
                </View>

                <Image
                  source={require("@images/gamehs.png")}
                  style={{ marginTop: 10 }}
                />
              </View>
            </ScrollView>
          </View>
          </View>
        )
    }
}
const styles=StyleSheet.create({
    sale: {
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        justifyContent: "space-between",
        alignItems: "center"
      },
      bullet: {
        marginLeft: 10,
        width: 25,
        height: 25,
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        textAlignVertical: "center"
      },
      card: {
        // margin:10,
        // width: width / 3,
        // height: width / 3 ,
        backgroundColor: "white",
        // paddingBottom:15
        // flexWrap: "wrap",
        // margin:10,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        margin: 5
      },
      cardContainer: {
        flexDirection: "row",
        // justifyContent: "space-between",
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20
      },
      sold: {
        backgroundColor: "#F62222",
        width: 50,
        height: 20,
        // marginLeft:10,
        textAlignVertical: "center",
        textAlign: "center",
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "#F62222",
        color: "white"
      },
      triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#F62222",
        transform: [{ rotate: "-90deg" }]
      },
      square: {
        width: 40,
        height: 20,
        backgroundColor: "#F62222"
      },
      triangleContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 10
      },
      popularContainer: {
        justifyContent: "center",
        alignItems: "center"
      }
})