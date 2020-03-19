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

export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
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
            <Image
              style={{ width: "90%" }}
              source={require("@images/promotions.png")}
            />
          </View>
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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 25,
    alignItems: "center"
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
  },
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
});
