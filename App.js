/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Icon } from 'react-native-elements';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          containerStyle={styles.settingsIcon}
          name='settings'
          size={40}
          onPress={() => alert('hello')} />
        <Text 
          style={styles.mainHeading}>
          Magic Carpet
        </Text>
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
  settingsIcon: {
    position: 'absolute',
    top: 40,
    right: 20
  },
  mainHeading: {
    color: 'cornflowerblue',
    fontSize: 20
  }
});
