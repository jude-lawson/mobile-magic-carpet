/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import LandingPage from './LandingPage'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: <LandingPage />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.currentPage}
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
