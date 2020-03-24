import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";

const { width } = Dimensions.get("window");
import { promotionImagePath } from "@consts/Urls";

const axios = require("axios");

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
  }
  async componentDidMount() {
    this.getProduct();
  }
  getProduct() {
    const self = this;
    const brand_id = this.props.navigation.getParam("brand_id");
    // console.log(brand_id);
    axios(
      "http://103.83.190.197/LinnOnlineShop-Laravel-/public/api/item/" +
        brand_id
    )
      .then(function(response) {
        //  console.log(response.data.data);
        self.setState({ product: response.data.data });
      })
      .catch(function(response) {
        console.log(response);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <Image source={require("@images/search.png")} />
          <TextInput placeholder="Search in Shop" />
        </View>

        <View style={styles.cardContainer}>
          {this.state.product.map((data, index) => {
            return (
              <View key={index}>
                <View style={styles.card}>
                  <TouchableOpacity
                  // onPress={() =>
                  //   this.props.navigation.navigate("PhoneProduct")
                  // }
                  >
                    <View style={styles.popularContainer}>
                      <Text style={{ color: "#BCFF00", fontWeight: "bold" }}>
                        {data.name}
                      </Text>
                    </View>

                    {data.photo ? (
                      <View>
                        <Image
                          source={{ uri: promotionImagePath + data.photo }}
                          style={{ marginTop: 10, width: 100, height: 100 }}
                        />
                      </View>
                    ) : null}

                    <View style={styles.secondContainer}>
                      <TouchableOpacity
                        style={[styles.touchBtn, { padding: 5 }]}
                      >
                        <Text>Add To Card</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.touchBtn, { padding: 10 }]}
                      >
                        <Image
                          source={require("@images/love.png")}
                          style={{ width: 10, height: 10 }}
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}

          {/* <View style={styles.card}>
            <View style={styles.popularContainer}>
              <Text style={{ color: "#0088FF", fontWeight: "bold" }}>Oppo</Text>
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
          </View> */}
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
    width: width / 2 - 50,
    padding: 15,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    flexWrap: "wrap"
  },
  popularContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  searchBox: {
    marginTop: 20,
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
  secondContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
    // backgroundColor:"red",
  },
  touchBtn: {
    backgroundColor: "#C5BEBE",
    justifyContent: "center",
    alignItems: "center"
    // flex:1
    // height:30,
    // padding:10
  }
});
