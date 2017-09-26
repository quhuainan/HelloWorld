/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, TouchableNativeFeedback, TouchableHighlight
} from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
          <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('white',false)}>
              <View style={styles.button}/>
          </TouchableNativeFeedback>

        <TouchableHighlight onPress={this.onButtonPressed}>
          <View style={styles.button}/>
        </TouchableHighlight>
      </View>
    );
  }

    onButtonPressed() {

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: 300,
    height: 70,
    backgroundColor: "grey",
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
