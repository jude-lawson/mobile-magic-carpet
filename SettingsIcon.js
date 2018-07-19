import React, { Component } from 'react';
import { Icon } from 'react-native-elements';

export default class SettingsIcon extends Component {
  render() {
    return (
      <Icon
        containerStyle={styles.settingsIcon}
        name='settings'
        size={40}
        onPress={() => alert('hello')} />
    );
  }
}

const styles = {
  settingsIcon: {
    position: 'absolute',
    top: 40,
    right: 20
  }
}
