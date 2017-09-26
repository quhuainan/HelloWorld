/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry, Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

let nativeSource = require('nativeImageSource');
export default class HelloWorld extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var imageAddress = "http://pic.58pic.com/58pic/13/76/85/69x58PICm2u_1024.jpg";
        let ad = {android: "ic_launcher", width: 96, height: 96}
        return (

            <View style={styles.container}>
                {/*加载native本地图片 该图片需要放在drawable 文件夹下 切需要重新编辑整个文件*/}
                <Image style={styles.welcome}
                       source={nativeSource(ad)}/>
                <Image source={{uri: "ic_launcher"}}
                       style={{width:40, height:40}}/>
                {/*加载本地图片*/}
                <Image style={styles.welcome}
                 source={require('./img/ic_launcher.png')}/>
                {/*加载网络图片*/}


                <Image style={styles.welcome}
                       source={{uri: imageAddress}}/>

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
        margin: 10,
        borderRadius: 90,
        width: 180,
        height: 180,
        borderWidth: 2,
        borderColor: "grey"
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
