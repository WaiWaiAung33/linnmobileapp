import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default class Boucher extends React.Component {
    renderRow() {
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignSelf: 'stretch' }} /> { /* Edit these as they are your cells. You may even take parameters to display different data / react elements etc. */}
                <View style={{ flex: 1, alignSelf: 'stretch' }} />
                <View style={{ flex: 1, alignSelf: 'stretch' }} />
                <View style={{ flex: 1, alignSelf: 'stretch' }} />
                <View style={{ flex: 1, alignSelf: 'stretch' }} />
            </View>
        );
    }
    render() {
        const data = [1, 2, 3, 4, 5];
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={require("@icons/linnlogo.png")}
                        style={styles.img}
                    />
                    <Text style={styles.text}>OFFICIAL RECEIPT</Text>
                </View>
                <View style={styles.body}>
                    <View style={{ marginRight: 10 }}>
                        <Text>Invoice No: C320200302/0007</Text>
                        <Text>Staff: Daw Poe Ei Phyu</Text>
                    </View>
                    <View>
                        <Text>Date: 02/03/2020</Text>
                        <Text>Time: 10:15:55am</Text>
                    </View>
                </View>
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <View style={[styles.column, { width: '8%' }]}>
                            <Text style={styles.row}>No</Text>
                            <Text>1</Text>
                            <Text>2</Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.row}>Particular</Text>
                            <Text style={{ lineHeight: 20, textAlign: 'justify' }}>Samsung mobile</Text>
                            <Text style={{ lineHeight: 20 }}>This is text </Text>
                        </View>
                        <View style={[styles.column, { width: '9%' }]}>
                            <Text style={styles.row}>Qty</Text>
                            <Text>5</Text>
                            <Text>5</Text>
                        </View>
                        <View style={[styles.column, { width: '20%' }]}>
                            <Text style={styles.row}>Price</Text>
                            <Text>1000,000</Text>
                            <Text>1000,000</Text>
                        </View>
                        <View style={[styles.column, { borderRightWidth: 2, width: '20%' }]}>
                            <Text style={styles.row}>Amount</Text>
                            <Text>5000,000</Text>
                            <Text>5000,000</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', }}>
                    <View style={styles.total}>
                        <Text>Total: 94000.00</Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text>Thank for your purchase</Text>
                    <Text style={{ fontSize: 10 }}>"Good sold are nan exchangeable nan returnable non refundable"</Text>
                </View>
                <View style={[{ flex: 1 }, styles.body]}>
                    <Image
                        source={require("@images/scanner.png")}
                        style={styles.scan}
                    />
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 11, textAlign: 'justify' }}>Head Office</Text>
                        <Text style={{ fontSize: 11 }}>No.14/585, 4th Street Paung Long,Pyinmana</Text>
                        <Text style={{ fontSize: 11 }}>Nay Pyi Taw</Text>
                        <Text style={{ fontSize: 11 }}>Ph:067 22884</Text>
                        <Text style={{ fontSize: 11, textAlign: 'justify' }}>www.linncomputer.com,hello@linncomputer.com</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 25,
        marginBottom: '10%',
    },
    header: {
        justifyContent: "center",
        alignItems: "center"
    },
    body: {
        flexDirection: 'row',
    },
    img: {
        width: 180,
        height: 100,
    },
    text: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    table: {
        // height: '50%',
        marginTop: 30
    },
    tableHeader: { flexDirection: 'row' },
    column: { borderLeftWidth: 2, borderBottomWidth: 2, width: '40%',borderTopWidth:2 },
    row: { borderBottomWidth: 2, },
    total: {
        backgroundColor: '#afafaf',
        width: '35%',
        height: 30,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scan: {
        margin: 10,
        width: 60,
        height: 60,
    }
})