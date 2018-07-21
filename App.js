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
import LoginPage from './LoginPage'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }

    this.logIn = this.logIn.bind(this)
  }

  logIn() {
    this.setState(() => ({ 
      isLoggedIn: true
    }))
  }

  render() {
    let page;
    if (!this.state.isLoggedIn) {
      page = <LoginPage handler={this.logIn} />
    } else {
      page = <LandingPage />
    }

    return (
      <View style={styles.container}>
        {page}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#030622'
  }
});
