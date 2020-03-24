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
const axios = require("axios");

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    };
  }
  async componentDidMount() {
    this.getCategory();
  }
  getCategory() {
    const self = this;
    const cat_id = this.props.navigation.getParam("cat_id");
    // console.log("103.83.190.197/LinnOnlineShop-Laravel-/public/api/getbrand/"+cat_id);
    axios
      .get(
        "http://103.83.190.197/LinnOnlineShop-Laravel-/public/api/getbrand/" +
          cat_id
      )
      .then(function(response) {
        // console.log(response.data.data);
        self.setState({ category: response.data.data });
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  render() {
    // console.log(this.props.navigation.getParam("cat_id"))
    return (
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <Image source={require("@images/search.png")} />
          <TextInput placeholder="Search in Shop" />
        </View>
        <View style={styles.cardContainer}>
          {this.state.category.map((data, index) => {
            return (
              <View key={index}>
                <View style={styles.card}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("PhoneProduct", {
                        brand_id: data.id
                      })
                    }
                  >
                    <View style={styles.popularContainer}>
                      {data.name ? (
                        <View>
                          <Text
                            style={{ color: "#BCFF00", fontWeight: "bold" }}
                          >
                            {data.name}
                          </Text>
                        </View>
                      ) : (
                        <Text>hi</Text>
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}

          {/* <View style={styles.card}>
            <View style={styles.popularContainer}>
              <Text style={{ color: "#0088FF", fontWeight: "bold" }}>
                Oppo
              </Text>
            </View>

          </View>
          <View style={styles.card}>
            <View style={styles.popularContainer}>
              <Text style={{ color: "#FFC400", fontWeight: "bold" }}>
                 Samsung
              </Text>
            </View>

          </View>

          <View style={styles.card}>
            <View style={styles.popularContainer}>
              <Text style={{ color: "#BCFF00", fontWeight: "bold" }}>
               Honor
              </Text>
            </View>

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
  }
});
