import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";

export default class DropDown extends React.Component {
  handleOnSelect(value, label) {
    if (this.props.onSelect) {
      this.props.onSelect(value, label);
    }
  }

  _renderMenuOptions() {
    let optionsArray = [];
    if (this.props.options) {
      if (this.props.options.length > 0) {
        this.props.options.forEach((data, index) => {
          optionsArray.push(
            <MenuOption
              disabled={this.props.value.value == data.value ? true : false}
              key={index}
              value={data}
              text={data.label}
              customStyles={{ backgroundColor: "red" }}
            />
          );
        });
      }
    }
    return optionsArray;
  }

  _renderMenuTrigger() {
    const placeholder = this.props.placeholder
      ? this.props.placeholder
      : "Select action";
    const selectedText = this.props.value.label
      ? styles.activeText
      : styles.inactiveText;
    return (
      <MenuTrigger customStyles={triggerStyles}>
        <Text style={[styles.triggerText, selectedText]}>
          {this.props.value.label ? this.props.value.label : placeholder}
        </Text>
        <View style={styles.downArrowIconWrapper}>
          <Image
            style={styles.downArrow}
            source={require("@icons/arrow-down.png")}
          />
        </View>
      </MenuTrigger>
    );
  }

  render() {
    return (
      <View>
          <MenuProvider>
        <Menu
          onSelect={({ value, label }) => this.handleOnSelect(value, label)}
        >
          {this._renderMenuTrigger()}
          <MenuOptions
            customStyles={menuOptionsStyles}
            optionsContainerStyle={{maxHeight: Dimensions.get("window").height, width: this.props.optionsContainerWidth? this.props.optionsContainerWidth: null, marginTop: this.props.marginTop? this.props.marginTop: 0}}
          >
            <ScrollView>{this._renderMenuOptions()}</ScrollView>
          </MenuOptions>
        </Menu>
        </MenuProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  downArrowIconWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  triggerText: {
    flex: 1,
    fontSize: 14,
    marginTop: 10
  },
  activeText: {
    color: "black"
  },
  inactiveText: {
    color: "gray"
  },
  downArrow: {
    width: 10,
    height: 10
  }
});

const triggerStyles = {
  triggerWrapper: {
    borderBottomWidth:1,
    borderColor:"gray",
    borderStyle: "solid",
    borderRadius: 5,
    flexDirection: "row",
    minHeight: 40,
    borderBottomColor:"#22B6EE"
  }
};

const menuOptionsStyles = {
  optionsWrapper: {},
  optionWrapper: {
    borderBottomWidth: 1,
    borderBottomColor:"gray",
    borderStyle: "solid"
  },
  OptionTouchableComponent: TouchableOpacity,
  optionTouchable: {
    activeOpacity: 0.3
  },
  optionText: {
    margin: 5,
    fontSize: 14
  }
};
