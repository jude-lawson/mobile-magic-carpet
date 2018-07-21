import React, { Component } from 'react';
import { Button } from 'react-native-elements';

export default class LyftLoginButton extends Component {
  constructor(props) {
    super(props);

  }

  openURL = (url) => {
    SafariView.show({
      url: url,
      fromBottom: true,
    });
  };

  render() {
    return (
      <Button
        raised
        large
        icon={{ name: 'directions-car' }}
        buttonStyle={{
          backgroundColor: '#ab37b6',
          borderRadius: 50
        }}
        onPress=this.openURL('https://www.lyft.com/oauth/authorize_app?client_id=hyyGpFDSm3OM&scope=public%20profile%20rides.read%20rides.request%20offline&state=%3Cstate_string%3E&response_type=code');
        title='Log In With Lyft' />
    );
  }
}
