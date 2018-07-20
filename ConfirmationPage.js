import React, { Component } from 'react';
import { Text } from 'react-native-elements';

export default class ConfirmationPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Text>This ride will cost: {this.props.price}</Text>
        <Text>Does this work for you?</Text>
      </>
    );
  }
}
