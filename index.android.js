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

let widthOfMargin = Dimensions.get('window').width * 0.05;
export default class HelloWorld extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle}
                           placeholder={'请输入手机号'}/>

                <Text style={styles.textPromptStyle}>
                    您输入的手机号：
                </Text>
                <TextInput style={styles.textInputStyle}
                placeholder={'请输入密码'}
                secureTextEntry={true}/>
                <Text style={styles.bigTextPrompt} >
                    确   定
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    textInputStyle: {
        fontSize: 20,
        backgroundColor: 'gray',
        margin: widthOfMargin,
    },
    textPromptStyle: {
        margin:widthOfMargin,
        fontSize:20
    },
    bigTextPrompt:{
        margin:widthOfMargin,
        backgroundColor:'gray',
        color:'white',
        textAlign:'center',
        fontSize:30
    }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
