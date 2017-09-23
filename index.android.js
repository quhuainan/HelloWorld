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
    constructor(props) {
        super(props);
        this.state = {
            inputedNum: '',
            inputedPW: '',

        };
        this.updatePW = this.updatePW.bind(this);
    }

    shouldComponentUpdate() {
        if (this.state.inputedNum.length < 3) {
            return false;
        } else {
            return true;
        }
    }

    updateNum(newText) {
        this.setState((state) => {
            for (var aName in state) {
                console.log(aName);
                console.log(state[aName])
            }
            return {
                inputedNum: newText,
                aBrandnewStateVariable: 'I am a new variable.'
            };
        }, this.changeNumDone);
    }

    changeNumDone() {
        console.log('React Native has changed inputed Num')
    }

    updatePW(newText) {
        this.setState((state) => {
            return {inputedPW: newText};
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle}
                           placeholder={'请输入手机号'}
                           onChangeText={(newText) => this.updateNum(newText)}/>

                <Text style={styles.textPromptStyle}>
                    您输入的手机号：{this.state.inputedNum}
                </Text>
                <TextInput style={styles.textInputStyle}
                           placeholder={'请输入密码'}
                           onChangeText={this.updatePW}
                           secureTextEntry={true}/>
                <Text style={styles.bigTextPrompt}>
                    确 定
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
        margin: widthOfMargin,
        fontSize: 20
    },
    bigTextPrompt: {
        margin: widthOfMargin,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 30
    }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
