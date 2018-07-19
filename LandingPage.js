import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SettingsIcon from './SettingsIcon'
import MagicCarpetButton from './MagicCarpetButton'

export default class LandingPage extends Component {
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
      <>
        <SettingsIcon />
        <MagicCarpetButton clickEvent={this.createAdventure} />
        <Text>{this.state.content}</Text>
      </>
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
