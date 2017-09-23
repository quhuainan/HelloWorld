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
export default class LoginLeft extends Component {
    //static myStaticObject = 'init value';
    constructor(props) {
        super(props);
        // this.propertyOne="111";
        this.state = {
            inputedNum: '',
            inputedPW: '',

        };
        this.updatePW = this.updatePW.bind(this);
    }


    updatePW(inputedPW) {
        this.setState(inputedPW);
        //HelloWorld.myStaticObject;
        // this.propertyOne="123"
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle}
                           placeholder={'请输入手机号'}
                           onChangeText={(inputedNum) => this.setState({inputedNum})}/>

                <Text style={styles.textPromptStyle}>
                    您输入的手机号：{this.state.inputedNum}
                </Text>
                <TextInput style={styles.textInputStyle}
                           placeholder={'请输入密码'}
                           onChangeText={(inputedPW) => this.setState({inputedPW})}
                           secureTextEntry={true}/>
                <Text style={styles.bigTextPrompt} onPress={() => this.userPressConfirm()}>
                    确 定
                </Text>

                <Text style={styles.bigTextPrompt} onPress={() => this.userPressAddressBook()}>
                    通讯录
                </Text>
            </View>
        );
    }

    userPressAddressBook() {

    }

    userPressConfirm() {
        this.props.onLoginPressed(this.state.inputedNum, this.state.inputedPW);
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

