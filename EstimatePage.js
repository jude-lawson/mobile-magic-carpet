import React, { Component } from 'react';
import { Card, Button, Text } from 'react-native-elements';

import LandingPage from './LandingPage';
import ConfirmationPage from './ConfirmationPage';
import HomeButton from './HomeButton';

export default class EstimatePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmed: false
    }

    this.handleConfirmation = this.handleConfirmation.bind(this)
    this.handleDecline = this.handleDecline.bind(this)
    this.handleHomeClick = this.handleHomeClick.bind(this)
  }

  handleConfirmation() {
    this.setState(() => ({
      confirmed: 'confirmed'
    }));
  }

  handleDecline() {
    this.setState(() => ({
      confirmed: 'declined'
    }));
  }

  handleHomeClick() {
    this.setState(() => ({
      confirmed: 'declined'
    }));
  }

  render() {
    let content;
    if (!this.state.confirmed) {
      content = (
        <>
          <HomeButton handleHomeClick={this.handleHomeClick} />
          <Card
          title='Confirm Your Price'>
            <Text>This ride will cost: {this.props.price}</Text>
            <Text>Does this work for you?</Text>
            <Button
              title='YES'
              onPress={this.handleConfirmation} />
            <Button
              title='NO'
              onPress={this.handleDecline} />
          </Card>
        </>
      )
    } else if (this.state.confirmed === 'confirmed') {
      content = <ConfirmationPage />
    } else if (this.state.confirmed === 'declined') {
      content = <LandingPage />
    }

    return (
      <>
        {content}
      </>
    );
  }
}
