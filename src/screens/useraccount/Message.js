import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground
} from "react-native";

export default class Message extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <ImageBackground
                        source={require("@images/moreback.png")}
                        style={styles.backgroundIcon}
                    >
                        <Image
                            source={require("@icons/Icon awesome-gift.png")}
                            style={styles.icon}
                        />
                    </ImageBackground>
                    <View>
                        <Text style={styles.text}>
                            15<Text style={{ fontSize: 10 }}>th</Text> Anniversary Celebration
                    </Text>
                        <Text style={[styles.text, { color: "#a5a5a5" }]}>Yesterday</Text>
                        <Image
                            source={require("@images/promotions.png")}
                            style={styles.image}
                        />
                        <Text style={{ fontSize: 10 }}>Buy 100000 Ks, get 1 coupon and take a new car! And more...</Text>
                    </View>
                </View>
                <View style={[styles.card, { height: '15%' }]}>
                    <ImageBackground
                        source={require("@images/printerback.png")}
                        style={styles.backgroundIcon}
                    >
                        <Image
                            source={require("@images/electronicss.png")}
                            style={styles.icon}
                        />
                    </ImageBackground>
                    <View>
                        <Text style={styles.text}>
                            Chat
                    </Text>
                        <Text style={[styles.text, { color: "#a5a5a5" }]}>12:45am</Text>
                        <Text style={styles.text}>How will be cost?</Text>
                    </View>
                </View>
                <View style={[styles.card, { height: '28%' }]}>
                    <ImageBackground
                        source={require("@images/computer.png")}
                        style={styles.backgroundIcon}
                    >
                        <Image
                            source={require("@icons/promotion.png")}
                            style={styles.icon}
                        />
                    </ImageBackground>
                    <View>
                        <Text style={styles.text}>
                            On the way to ware house?
                    </Text>
                        <Text style={[styles.text, { color: "#a5a5a5" }]}>12/03/2020</Text>
                        <View style={styles.innerCard}>
                            <Image
                                source={require("@images/JBL2.png")}
                               
                            />
                            <View>
                            <Text style={styles.text}>JBL Speaker</Text>
                            <Text style={{ fontSize: 10,color:'#444'}}>JBL is an American company that</Text>
                            <Text style={{ fontSize: 10,color:'#444' }}>manufacture audio equipment,</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e5e5e5',
    },
    card: {
        width: '95%',
        height: '35%',
        marginTop: 10,
        marginLeft:10,
        marginRight:10,
        borderRadius: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    icon: {
        width: 20,
        height: 20
    },
    backgroundIcon: {
        margin: 5,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '60%',
        borderRadius: 5,
    },
    text: {
        fontSize: 14
    },
    innerCard: { 
        backgroundColor: '#a5a5a5',
        width: '120%',
        height: '60%', 
        borderRadius: 5,
        flexDirection:'row',
    }
});
