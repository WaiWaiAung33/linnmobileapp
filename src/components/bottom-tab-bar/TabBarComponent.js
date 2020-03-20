import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";

//import Components
import TabBarAccountIcon from "./TabBarAccoutIcon";
import TabBarCartIcon from "./TabBarCartIcon";
import TabBarHomeIcon from "./TabBarHomeIcon";
import TabBarPromotionIcon from "./TabBarPromotionIcon";
import TabBarServiceIcon from "./TabBarServiceIcon";

export default class TabBarComponent extends React.Component {
  navigate(routeName) {
    this.props.navigation.navigate(routeName);
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={() => console.log("BottomTabBarComponent")}
        />
         <TouchableOpacity
          style={[styles.btn, styles.marginLeft]}
          onPress={() => this.props.navigation.navigate("Promotion")}
        >
          <TabBarPromotionIcon
            // focused={
            //   routeName == "PromotionNavigator" || routeName == "Promotion" ? true : false
            // }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.marginLeft]}
          onPress={() => this.props.navigation.navigate("Cart")}
        >
          <TabBarCartIcon
            // focused={
            //   routeName == "CartNavigator" || routeName == "Cart" ? true : false
            // }
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, styles.marginLeft]}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <TabBarHomeIcon
            // focused={
            //   routeName == "HomeNavigator" || routeName == "Home" ? true : false
            // }
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, styles.marginLeft]}
          onPress={() => this.props.navigation.navigate("Service")}
        >
          <TabBarServiceIcon
            // focused={
            //   routeName == "ServiceNavigator" || routeName == "Service" ? true : false
            // }
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, styles.marginLeft]}
          onPress={() => this.props.navigation.navigate("Account")}
        >
          <TabBarAccountIcon
            // focused={
            //   routeName == "UserAccountNavigator" || routeName == "Account" ? true : false
            // }
          />
        </TouchableOpacity>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"white",
    borderTopWidth: 1,
    borderTopColor:"gray"
  }
});
