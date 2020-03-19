import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";

//import components
import DropDown from "@components/DropDown";

//import const
const { height, width } = Dimensions.get("window");
const dropDownWidth = width - 40;

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: [{ name: "naypyitaw" }, { name: "pyinmana" }],
      citys: [{ name: "naypyitaw" }, { name: "pyinmana" }]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={{ margin: 10 }}>
          <Text>Create User</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            multiline={true}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Phone Number"
            multiline={true}
          />
          <TextInput
            style={styles.textInput}
            placeholder="NRC Number"
            multiline={true}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Date of Birth"
            multiline={true}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Company Name"
            multiline={true}
          />
          <Text style={{ marginTop: 10 }}>Address</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Street1"
            multiline={true}
          />
          <TextInput
            style={styles.textArea}
            placeholder="Street2"
            multiline={true}
          />
          <View>
            <DropDown
              placeholder="City"
              value={this.state.city}
              options={this.state.citys}
              //  onSelect={this._handleOnSelect.bind(this)}
              optionsContainerWidth={dropDownWidth}
            />
          </View>
          <View style={{ marginTop: 40 }}>
            <DropDown
              placeholder="Township"
              value={this.state.city}
              options={this.state.citys}
              //  onSelect={this._handleOnSelect.bind(this)}
              optionsContainerWidth={dropDownWidth}
            />
          </View>
          <View style={{ marginTop: 50 }}>
            <Text>For Shipping</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TextInput
                placeholder="latitude"
                style={[styles.textArea, { width: "30%" }]}
              />
              <TextInput
                placeholder="longitude"
                style={[styles.textArea, { width: "30%" }]}
              />
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Image source={require("@icons/location.png")} />
                <Text style={{ color: "#22B6EE" }}>GetLocation</Text>
              </View>
            </View>
          </View>
          <View style={{marginTop:30,alignItems:"center"}}>
            <Text>
              By registration,I have read agree the 
            </Text>
            <Text>Terms & Condition and
              Privacy Policy</Text>
              
          </View>
          <TouchableOpacity style={styles.touchBtn}>
                <Text>Submit</Text>
              </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  textInput: {
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#22B6EE"
  },
  textArea: {
    marginTop: 10,
    borderBottomWidth: 1,
    paddingVertical: 5,
    borderStyle: "solid",
    borderColor: "#22B6EE"
  },
  touchBtn:{
    borderWidth:1,
    padding:10,
    marginTop:20,
    borderStyle:"solid",
    borderColor:"#22B6EE",
    backgroundColor:"#22B6EE",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10
  }
});
