/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry, Image,ActivityIndicator,
    StyleSheet,
    Text,
    View
} from 'react-native';
export default class HelloWorld extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*省略末尾字体*/}
                <Text style={styles.welcome}  ellipsizeMode="tail"
                numberOfLines={1}>
                    Welcome to React Native!                    Shake or press menu button for dev menu
                    Shake or press menu button for dev menu
                    Shake or press menu button for dev menu
                    Shake or press menu button for dev menu
                    Shake or press menu button for dev menu

                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                {/*文字中穿插图片*/}
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}n
                    Shake or press<Image source={require('./img/ic_launcher.png')}/> menu button for dev menu
                </Text>

                {/*文字中嵌套*/}
                <Text style={{fontSize:20,textAlign:'center'}}>我是20号字体
                <Text style={{fontWeight:'bold'}}>{'\r\n'}我是加粗20号字体</Text>
                <Text style={{color:'black'}}>{'\r\n'}我是加黑20号字体</Text></Text>
                <ActivityIndicator animation={true}
                                    color={'red'}
                                    size={'small'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        textDecorationLine: "underline line-through",
        marginBottom: 5,
        fontSize:40
    },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
