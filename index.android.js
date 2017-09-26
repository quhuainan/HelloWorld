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
    View
} from 'react-native';

export default class HelloWorld extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*<View style={styles.welcome} opacity={0}/>
                <View style={styles.welcome} opacity={0.1}/>
                <View style={styles.welcome} opacity={0.25}/>
                <View style={styles.welcome} opacity={0.75}/>
                <View style={styles.welcome} opacity={1}/>
                <View style={styles.welcome} opacity={5}/>
                <View style={styles.block1}/>
                <View style={styles.block2}/>
                  <Text style={styles.welcome0}>整体旋转45度</Text>
                <Text style={styles.welcome1}>X轴旋转45度</Text>

                <Text style={styles.welcome3}>整体放大2倍</Text>
                <Text style={styles.welcome4}>X轴放大2倍</Text>
                <Text style={styles.welcome5}>Y轴放大2倍</Text>
                <Text style={styles.welcome6}>X轴平移200pt</Text>
                <Text style={styles.welcome7}>Y轴平移10pt</Text>*/}

                <Text style={styles.welcome8}>X轴倾斜45度</Text>
                <Text style={styles.welcome10}>正常拉伸xx度</Text>
                <Text style={styles.welcome9}>Y轴倾斜45度</Text>
                <Text style={styles.welcome2}>Y轴旋转45度</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    welcome: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "blue",
        borderStyle: "dashed",
        backgroundColor: 'red',
        borderRadius: 25
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    block1: {
        width: 150,
        height: 150,
        borderWidth: 1,
        backgroundColor: "black",
        borderRadius: 25
    },
    block2: {
        width: 150,
        height: 150,
        borderWidth: 1,
        backgroundColor: "black",
        borderRadius: 25,
        elevation: 50
    },
    welcome0: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        transform: [{rotate: "45deg"}, {scale: 2}],
        fontSize: 40
    },
    welcome1: {flex: 2, justifyContent: "center", alignItems: "center", transform: [{rotateX: "45deg"}], fontSize: 40},
    welcome2: {flex: 2, justifyContent: "center", alignItems: "center", transform: [{rotateY: "45deg"}], fontSize: 40},
    welcome3: {flex: 2, justifyContent: "center", alignItems: "center", transform: [{scale: 2}], fontSize: 40},
    welcome4: {flex: 2, justifyContent: "center", alignItems: "center", transform: [{scaleX: 2}], fontSize: 40},
    welcome5: {flex: 2, justifyContent: "center", alignItems: "center", transform: [{scaleY: 2}], fontSize: 40},
    welcome6: {flex: 2, justifyContent: "center", alignItems: "center", transform: [{translateX: 200}], fontSize: 40},
    welcome7: {flex: 2, justifyContent: "center", alignItems: "center", transform: [{translateY: 10}], fontSize: 40},
    welcome8: {flex: 2, justifyContent: "center", alignItems: "center", transform: [{skewX: "45deg"}], fontSize: 40},
    welcome9: {flex: 2, justifyContent: "center", alignItems: "center", transform: [{skewY: "45deg"}], fontSize: 40},
    welcome10: {flex: 2, justifyContent: "center", alignItems: "center", fontSize: 40},
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
