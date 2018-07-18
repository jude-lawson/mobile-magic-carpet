/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Icon, Button } from 'react-native-elements';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'This is the current body'
    }
    this.createAdventure = this.createAdventure.bind(this)
  }

  createAdventure() {
   fetch('http://localhost:3000/api/v1/adventures', {
     method: 'POST',
     body: JSON.stringify({ name: 'An adventure' })
   })
    .then((response) => response.json())
    .then((parsedResponse) => {
      this.setState(() => ({
        content: parsedResponse.message
      }))
    })
    .catch((error) => {
      console.error(error);
    })

  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.div} />
        <Icon
          containerStyle={styles.settingsIcon}
          name='settings'
          size={40}
          onPress={() => alert('hello')} />
        <Button 
          title='Magic Carpet'
          buttonStyle={{
            backgroundColor: '#ab37b6',
            borderRadius: 50,
            width: 200
          }}
          onPress={this.createAdventure} />
          <Text>{this.state.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7998fe'
  },
  settingsIcon: {
    position: 'absolute',
    top: 40,
    right: 20
  }
  // div: {
  //   backgroundColor: '#AADDFF',
  //   width: 0,
  //   height: 0,
  //   backgroundColor: 'transparent',
  //   borderRightWidth: 100,
  //   borderRightColor: '#000000',
  //   borderTopWidth: 100,
  //   borderTopColor: '#000000',
  //   borderLeftWidth: 50,
  //   borderLeftColor: 'red',
  //   borderBottomWidth: 50,
  //   borderBottomColor: 'red',
  //   position: 'absolute',
  //   top: 0,
  //   right: 0
  // }
});
