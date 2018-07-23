import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import SafariView from 'react-native-safari-view';

export default class LyftLoginButton extends Component {
  constructor(props) {
    super(props);

  }

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
        title='Log In With Lyft'
        onPress={this.props.clickEvent}
      />
    );
  }
}
