import React, { Component } from 'react';
import { Card, Button, Text } from 'react-native-elements';

import LandingPage from './LandingPage';
import HomeButton from './HomeButton';

export default class ConfirmationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      desinationVisible: false,
      goHome: false
    }

    this.revealDestination = this.revealDestination.bind(this)
    this.handleHomeClick = this.handleHomeClick.bind(this)
  }

  revealDestination() {
    this.setState(() => ({
      destinationVisible: true
    }));
  }

  handleHomeClick() {
    this.setState(() => ({
      goHome: true
    }));
  }

  render() {
    if (!this.state.destinationVisible && !this.state.goHome) {
      content = (
        <>
          <HomeButton handleHomeClick={this.handleHomeClick} />
          <Card
            title='Hooray!' >
            <Text>Your ride is on its way!</Text>
          </Card>
          <Button 
            raised
            large
            buttonStyle={{
              borderRadius: 50,
              marginTop: 20,
              backgroundColor: '#4fb859'
            }}
            title='Reveal Your Destination'
            onPress={this.revealDestination} />
        </>
      );
    } else if (this.state.destinationVisible && !this.state.goHome) {
      content = (
        <>
          <HomeButton handleHomeClick={this.handleHomeClick} />
          <Card
            title='This is your destination'>
            <Text></Text>
          </Card>
        </>
      );
    } else if (this.state.goHome) {
      content = <LandingPage />
    }

    return (
      <>
        {content}
      </>
    );
  }
}
