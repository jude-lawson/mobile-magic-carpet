import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class SettingsIcon extends Component {
  render() {
    return (
      <Icon
        containerStyle={styles.settingsIcon}
        name='settings'
        size={40}
        color='#7998fe'
        onPress={() => alert('hello')} />
    );
  }
}

const styles = StyleSheet.create({
  settingsIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
  }
});
