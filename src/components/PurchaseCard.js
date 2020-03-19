import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class PurchaseCard extends React.Component {
  render() {
    return (
      <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
        <View style={styles.tableHeader}>
          <Text style={[styles.headerText, { marginRight: 20 }]}>
            {this.props.number}
          </Text>

          <Text
            style={[
              styles.headerText,
              {
                flex: 1,
                marginRight: 20
              }
            ]}
          >
            {this.props.date}
          </Text>

          <Text style={[styles.headerText, { flex: 1 }]}>
            {this.props.invoiceNo}
          </Text>
          <Text style={[styles.headerText, { width: "25%" }]}>
            {this.props.amount}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tableHeader: {
    backgroundColor: "white",
    width: "100%",
    height: 35,
    borderRadius: 5,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10
  },
  headerText: {
    // color: "#1431EB",
    fontSize: 15
    // fontWeight: "bold"
  },
  arrow: {
    width: 15,
    height: 5
  }
});
