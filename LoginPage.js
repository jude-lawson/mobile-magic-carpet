import React, { Component } from 'react';
import { StyleSheet, View, Linking , AsyncStorage } from 'react-native';
import SafariView from 'react-native-safari-view';
import LyftLoginButton from './LyftLoginButton';
import { lyft_client_id, lyft_client_secret } from './config.js';
import * as Keychain from 'react-native-keychain';
import LandingPage from './LandingPage'

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lyftReady: false
    }

    this.changeStatus = this.changeStatus.bind(this)
  }

  openURL = (url) => {
    SafariView.show({
      url: url,
      fromBottom: true,
    });
    Linking.addEventListener( 'url', handleOpenUrl );
    function handleOpenUrl( event ) {
      const code = event.url.toString().match( /code=([^&]+)/ );
      console.log(code);
      if ( code ) {
        fetch('https://api.lyft.com/oauth/token', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'Basic '+btoa(lyft_client_id + ':' + lyft_client_secret)
          },
          body: JSON.stringify({
            "grant_type": "authorization_code",
            "code": code[1]
          })
        })
        .then((response) => response.json())
        .then((parsedResponse) => {
          console.log(parsedResponse);
          {this.save(parsedResponse['access_token'])};
          {this.save(parsedResponse['refresh_token'])};
        });
      } else {
        reject( 'params' );
      };
      SafariView.dismiss();
      this.changeStatus;
    };
  }

  changeStatus() {
    this.setState(() => ({
      lyftReady: true
    }));
  }

  async save(lyftToken) {
    try {
      await Keychain.setGenericPassword('lyftToken', lyftToken);
    } catch (err) {
      console.log('Could not save lyft token, ' + err );
    }
  }

  async save(lyftRefreshToken) {
    try {
      await Keychain.setGenericPassword('lyftRefreshToken', lyftRefreshToken);
    } catch (err) {
      console.log('Could not save lyft refresh token, ' + err );
    }
  }

  render() {
    let page;
    if (this.state.lyftReady) {
      page = <LandingPage />
    } else {
      page = <LyftLoginButton clickEvent={() => this.openURL('https://www.lyft.com/oauth/authorize_app?client_id=hyyGpFDSm3OM&scope=public%20profile%20rides.read%20rides.request%20offline&state=%3Cstate_string%3E&response_type=code')}/>
    }
    return (
      <>
        {page}
      </>
    );
  }
}

const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    margin: 20,
  },
  avatarImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
    marginBottom: 30,
  },
});
