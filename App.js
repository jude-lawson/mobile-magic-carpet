import React, {Component} from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  logIn() {
    this.setState(() => ({
      loggedIn: true
    }));
  }

  render() {
    let page;
    if (this.state.loggedIn) {
      page = <LandingPage />
    } else {
      page = <LoginPage handler={this.logIn} />
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
