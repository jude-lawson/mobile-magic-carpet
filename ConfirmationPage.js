import React, { Component } from 'react';
import { Card, Button, Text } from 'react-native-elements';

export default class ConfirmationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      desinationVisible: false
    }

    this.revealDestination = this.revealDestination.bind(this)
  }

  revealDestination() {
    this.setState(() => ({
      destinationVisible: true
    }));
  }

  render() {
    if (!this.state.destinationVisible) {
      content = (
        <>
          <Card
            title='Hooray!' >
            <Text>Your ride is on its way!</Text>
          </Card>
          <Button 
            raised
            large
            title='Reveal Your Destination'
            onPress={this.revealDestination} />
        </>
      );
    } else if (this.state.destinationVisible) {
      content = (
        <Card
          title='This is your destination'>
          <Text></Text>
        </Card>
      );
    }
    return (
      <>
        {content}
      </>
    );
  }
}
