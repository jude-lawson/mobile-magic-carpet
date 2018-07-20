import React, { Component } from 'react';
import { Card, Button, Text } from 'react-native-elements';

export default class ConfirmationPage extends Component {
  render() {
    return (
      <>
        <Card
          title='Hooray!' >
          <Text>Your ride is on its way!</Text>
        </Card>
        <Button 
          raised
          large
          title='Reveal Your Destination' />
      </>
    );
  }
}
