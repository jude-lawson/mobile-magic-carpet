import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import SettingsIcon from './SettingsIcon';
import MagicCarpetButton from './MagicCarpetButton';
import EstimatePage from './EstimatePage';
import HomeButton from './HomeButton';
import SettingsPage from './SettingsPage';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'This is the current body',
      rideCalled: false,
      openSettings: false
    }

    this.createAdventure = this.createAdventure.bind(this)
    this.handleHomeClick = this.handleHomeClick.bind(this)
    this.renderSettingsPage = this.renderSettingsPage.bind(this)
  }

  createAdventure() {
    fetch('http://localhost:3000/api/v1/adventures', {
      method: 'POST',
      body: JSON.stringify({ name: 'An adventure' })
    })
     .then((response) => response.json())
     .then((parsedResponse) => {
       this.setState(() => ({
         rideCalled: true,
         content: parsedResponse.message
       }))
     })
     .catch((error) => {
       console.error(error);
     })
  }

  handleHomeClick() {
    this.setState(() => ({
      rideCalled: false
    }));
  }

  renderSettingsPage() {
    this.setState(() => ({
      openSettings: true
    }));
  }

  render() {
    let pageContent;
    if (!this.state.rideCalled && !this.state.openSettings) {
      pageContent = (
        <>
          <HomeButton handleHomeClick={this.handleHomeClick} />
          <SettingsIcon renderSettings={this.renderSettingsPage} />
          <MagicCarpetButton clickEvent={this.createAdventure} />
        </>
      );
    } else if (this.state.rideCalled) {
      pageContent = <EstimatePage price={this.state.content} />
    } else if (this.state.openSettings) {
      pageContent = <SettingsPage />
    }

    return (
      <>
        {pageContent}
      </>
    );
  }
}

// const styles = StyleSheet.create({
//   mainHeading: {
//     color: '#7998fe',
//     position: 'absolute',
//     top: 100
//   }
// });
