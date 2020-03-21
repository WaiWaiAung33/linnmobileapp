import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default class UserAccount extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <ImageBackground
            source={require("@images/Bg2.png")}
            style={styles.backImg}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.scannerContainer}>
                <Image
                  source={require("@images/scanner.png")}
                  style={styles.scannerImg}
                />
                <Text style={{ color: "#FFC400", marginTop: 20 }}>
                  QR Code will expire in 4:59
                </Text>
              </View>
              <View style={styles.secondContainer}>
                <Image
                  source={require("@icons/setting.png")}
                  style={{ width: 20, height: 20 }}
                />
                <View style={styles.userImg}>
                  <Image
                    source={require("@images/users.png")}
                    style={{ width: 60, height: 60 }}
                  />
                  <Text
                    style={[styles.text, { fontWeight: "bold", fontSize: 15 }]}
                  >
                    Mr Linn
                  </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Text
                      style={[
                        styles.text,
                        { marginLeft: 15, marginBottom: 10 }
                      ]}
                    >
                      Total Point
                    </Text>
                    <Text style={styles.text}>Total Purchase</Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.text,
                        { marginLeft: 15, marginBottom: 10 }
                      ]}
                    >
                      500
                    </Text>
                    <Text style={styles.text}>1,312,000ks</Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.body}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.text}>3</Text>
              <Text style={styles.text}>My WishList</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.text}>5</Text>
              <Text style={styles.text}>Recently Viewed</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardBalanceContainer}>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={{ fontSize: 15 }}>Cash Balance</Text>
            <View style={styles.firstcardBalance}>
              <Text style={{ marginTop: 10, fontSize: 18, color: "#3AB93A" }}>
                15,00 ks
              </Text>

              <Image
                source={require("@icons/eye.png")}
                style={{ marginLeft: 20, marginTop: 10 }}
              />
            </View>
          </View>
          <View style={styles.secondCardBalance}>
            <Text style={{ fontSize: 15, marginLeft: 10 }}>Scan Gift Card</Text>
            <Image
              source={require("@icons/scan.png")}
              style={{ marginLeft: 75, marginTop: 10 }}
            />
          </View>
        </View>
        <ScrollView>
          <View style={[styles.card, { backgroundColor: "#F2F2F2" }]}>
            <View>
              <Image source={require("@icons/shoppingcard.png")} />
              <Text>Online</Text>
            </View>
            <View style={{ bflex: 1, marginLeft: 30 }}>
              <Text
                style={{ color: "#7AA9F4", fontWeight: "bold", fontSize: 20 }}
              >
                112,000ks
              </Text>
              <Text style={{ color: "#7AA9F4" }}>Total Purchase</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end", marginRight: 20 }}>
              <Text
                style={{ color: "#7AA9F4", fontWeight: "bold", fontSize: 18 }}
              >
                200
              </Text>
              <Text style={{ color: "#7AA9F4" }}>Point</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("OnlineDetail")}
              style={{ justifyContent: "flex-end" }}
            >
              <Text style={{ color: "#FC8069" }}>Detail ></Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <View>
              <Image source={require("@icons/shop.png")} />
              <Text>Shop</Text>
            </View>
            <View style={{ bflex: 1, marginLeft: 30 }}>
              <Text
                style={{ color: "#7AA9F4", fontWeight: "bold", fontSize: 20 }}
              >
                112,000ks
              </Text>
              <Text style={{ color: "#7AA9F4" }}>Total Purchase</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end", marginRight: 20 }}>
              <Text
                style={{ color: "#7AA9F4", fontWeight: "bold", fontSize: 18 }}
              >
                200
              </Text>
              <Text style={{ color: "#7AA9F4" }}>Point</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("ShopDetail")}
              style={{ justifyContent: "flex-end" }}
            >
              <Text style={{ color: "#FC8069" }}>Detail ></Text>
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: "#F2F2F2", padding: 10 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>My Orders</Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("All")
                }
              >
                <Text style={{ color: "#FC8069" }}>View all Order ></Text>
              </TouchableOpacity>
            </View>
            <View style={styles.serviceContainer}>
              <View>
                <TouchableOpacity
                style={styles.touchBtn}
                  onPress={() => this.props.navigation.navigate("Boucher")}
                >
                  <Image source={require("@icons/pay.png")} />
                  <Text>To Pay</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.touchBtn}>
                <Image source={require("@icons/review.png")} />
                <Text>Review</Text>
                </TouchableOpacity>
               
              </View>
              <View>
                <TouchableOpacity style={styles.touchBtn}>
                <Image source={require("@icons/recive.png")} />
                <Text>To Receive</Text>
                </TouchableOpacity>
                
              </View>
              <View>
                <TouchableOpacity style={styles.touchBtn}>
                <Image source={require("@icons/return.png")} />
                <Text>My Return</Text>
                </TouchableOpacity>
               
              </View>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text>My Service</Text>

            <View style={[styles.serviceContainer, { marginBottom: 20 }]}>
              <View>
                <TouchableOpacity
                 style={styles.touchBtn}
                  onPress={() => this.props.navigation.navigate("Message")}
                >
                  <Image source={require("@icons/message.png")} />
                  <Text>Message</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.touchBtn}>
                <Image source={require("@icons/payment.png")} />
                <Text>Payment</Text>
                <Text> Option</Text>
                </TouchableOpacity>
               
              </View>
              <View>
                <TouchableOpacity style={styles.touchBtn}>
                <Image source={require("@icons/helpcenter.png")} />
                <Text>Help Center</Text>
                </TouchableOpacity>
                
              </View>
              <View>
                <TouchableOpacity style={styles.touchBtn}>
                <Image source={require("@icons/location.png")} />
                <Text>Shop Location</Text>
                </TouchableOpacity>
                
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
    flex: 1,
    backgroundColor: "white"
  },
  scannerImg: {
    width: 120,
    height: 120,
    borderRadius: 10
  },
  backImg: {
    width: "100%",
    height: 220
  },
  scannerContainer: {
    alignItems: "center",
    marginTop: 50
  },
  secondContainer: {
    marginTop: 50,
    alignItems: "flex-end",
    flex: 1,
    marginRight: 10
  },
  userImg: {
    marginRight: 40,
    marginBottom: 10,
    alignItems: "center"
  },
  text: {
    color: "white"
  },
  bodyContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#FC8069",
    marginTop: 3
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5
  },
  cardBalanceContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 70,
    marginTop: 20
  },
  firstcardBalance: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  secondCardBalance: {
    flex: 1,
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "#707070",
    height: 50
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    padding: 20
  },
  touchBtn: {
    alignItems: "center",
    justifyContent: "center"
  },
  serviceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  }
});
