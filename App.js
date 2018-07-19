/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import SettingsIcon from './SettingsIcon'

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
        <SettingsIcon />
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
  }
});
