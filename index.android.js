/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    Dimensions,
    View
} from 'react-native';

export default class HelloWorld extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.firstRow}>
                    <View style={styles.test1}/>
                    <View style={styles.test2}/>
                    <View style={styles.test3}/>
                </View>
                <View style={styles.testPosition}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    firstRow: {
        height: 80,
        top: 40,
        flexWrap:"wrap",
        backgroundColor: "black",
        flexDirection: "row",
        //stretch 只能针对没有固定高度的控件才有用
        alignItems: "center",
        justifyContent:"space-around"
    },
    test1: {
        width: 68,
        height: 28,
        backgroundColor: "red"
    },
    test2: {
        width: 40,
        height: 12,
        backgroundColor: "white"
    },
    test3: {
        width: 100,
        height: 56,
        backgroundColor: "blue"
    },

    testPosition: {
        backgroundColor: "grey",
        height: 60,
        width: 60,
        position: "absolute",
        top: 150,
        right: 50
    }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
