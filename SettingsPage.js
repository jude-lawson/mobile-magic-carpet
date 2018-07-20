import React, { Component } from 'react';
import { Card } from 'react-native-elements';

import LandingPage from './LandingPage';
import HomeButton from './HomeButton';

export default class SettingsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goHome: false
    }

    this.handleHomeClick = this.handleHomeClick.bind(this);
  }

  handleHomeClick() {
    this.setState(() => ({
      goHome: true
    }));
  }

  render() {
    let content;
    if (!this.state.goHome) {
      content = (
        <>
          <HomeButton handleHomeClick={this.handleHomeClick} />
          <Card
            title='Settings' />
        </> 
      )
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
