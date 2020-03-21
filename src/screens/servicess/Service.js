import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ImageBackground
} from "react-native";
// import { TextInput } from "react-native-gesture-handler";
import DatePicker from "react-native-datepicker";
//import Component
import PurchaseCard from "@components/PurchaseCard";
export default class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: "2016-05-15" };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}></StatusBar>
        <View style={styles.header}>
          <View style={styles.textContainer}>
              <ImageBackground   
              source={require("@icons/cyclewhite.png")}
              style={{
                width: 80,
                height: 80,
                justifyContent: "center",
                alignItems: "center"
              }}>
                  <Image
                   source={require("@icons/shoppingcard.png")}
                   style={{ width: 50, height: 50 }}
                   />

              </ImageBackground>
            {/* <Image
              source={require("@images/cart.png")}
              style={styles.cartimg}
            /> */}
            <View style={{ marginTop: 20 }}>
              <Text style={styles.pointText}>Total Purchase</Text>
              <Text style={[styles.pointText, { marginLeft: 85 }]}>Point</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.pointText}>1200,000 KS</Text>
              <Text style={styles.pointText}> 300</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={styles.searchContainer}>
            <View style={styles.search}>
              <Image
                source={require("@images/search.png")}
                style={styles.searchimg}
              />
              <TextInput
                placeholder="Search"
                style={{ width: "100%" }}
              ></TextInput>
            </View>
            <View style={styles.dateContainer}>
              <Text>From</Text>
              <DatePicker
                style={{ width: null }}
                date={this.state.date}
                mode="date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  this.setState({ date: date });
                }}
              />
            </View>
            <View style={styles.dateContainer}>
              <Text>To</Text>
              <DatePicker
                style={{ width: null }}
                date={this.state.date}
                mode="date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  this.setState({ date: date });
                }}
              />
            </View>
          </View>
          <View style={styles.searchContainer}>
            <Text style={styles.paymentText}>Payment Method</Text>
            <TextInput style={styles.paymentInput}></TextInput>
            <View style={styles.downarrowContainer}>
              <Image
                style={styles.downimg}
                source={require("@images/downarrow.png")}
              />
            </View>
          </View>
          <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
            <View style={styles.tableHeader}>
              <Text style={styles.headerText}>No.</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.headerText}>Date</Text>
                <View>
                  <Image
                    source={require("@images/up.png")}
                    style={styles.arrow}
                  />
                  <Image
                    source={require("@images/down.png")}
                    style={styles.arrow}
                  />
                </View>
              </View>
              <Text style={[styles.headerText, { marginLeft: 20 }]}>
                Invoice No.
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.headerText}>Amount(Ks)</Text>
                <View>
                  <Image
                    source={require("@images/up.png")}
                    style={styles.arrow}
                  />
                  <Image
                    source={require("@images/down.png")}
                    style={styles.arrow}
                  />
                </View>
              </View>
            </View>
          </View>
          <PurchaseCard
            number="1"
            date="01/03/2020"
            invoiceNo="C202003..."
            amount="12000"
          />
          <PurchaseCard
            number="2"
            date="02/03/2020"
            invoiceNo="C202003..."
            amount="52000"
          />
          <PurchaseCard
            number="3"
            date="03/03/2020"
            invoiceNo="C202003..."
            amount="130000"
          />
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            "Thank so much for your Purchase"
          </Text>
          <TouchableOpacity 
          onPress={()=>this.props.navigation.naivgate("Account")}
          activeOpacity={0.8}>
            <Image
              source={require("@images/back.png")}
              style={styles.backImg}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    width: "100%",
    height: "25%",
    backgroundColor:"#FC8069",
    justifyContent: "center"
  },
  textContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
    marginTop: 35
  },
  cartimg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "white"
  },
  pointText: {
    color: "white",
    fontSize: 20
    // fontFamily: "Fertigo_PRO"
  },
  search: {
    width: "60%",
    height: 37,
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    // paddingBottom: 10,
    flexDirection: "row",
    backgroundColor: "white"
  },
  searchContainer: {
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 10
    // backgroundColor: "red"
  },
  searchimg: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10
  },
  paymentText: {
    fontSize: 18
  },
  paymentInput: {
    width: "20%",
    height: 27,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    marginLeft: 10
  },
  downarrowContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 3,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  downimg: {
    width: 15,
    height: 15
    // borderRadius: 10,
    // borderWidth: 1,
    // marginTop: 5,
    // marginLeft: 10,
    // borderColor: "black"
  },
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
    color: "#3979F7",
    fontSize: 15,
    fontWeight: "bold"
  },
  arrow: {
    width: 15,
    height: 5
  },
  footerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  footerText: {
    color: "#3979F7",
    fontSize: 15
  },
  backImg: {
    width: 25,
    height: 25,
    marginTop: 10
  }
});
