import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Card, Text, Button, View } from 'react-native-elements';
import RangeSlider from 'react-native-range-slider'

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
            wrapperStyle={{ width: 300 }}>
            <Text style={styles.card_heading}>
              Settings
            </Text>
            <Text style={styles.setting}>
              Radius(miles):
            </Text>
            <RangeSlider style={styles.slider}
              minValue={1}
              maxValue={5}
              tintColor={'#9659fb'}
              selectedMinimum={2}
              selectedMaximum={4}
              lineHeight={1.5}
            />
            <Text style={styles.setting}>
              Price(Yelp $):
            </Text>
            <RangeSlider style={styles.slider}
              minValue={1}
              maxValue={4}
              tintColor={'#9659fb'}
              selectedMinimum={2}
              selectedMaximum={3}
              lineHeight={1.5}
            />
            <Text style={styles.setting}>
              Rating(stars):
            </Text>
            <RangeSlider style={styles.slider}
              minValue={1}
              maxValue={5}
              tintColor={'#9659fb'}
              selectedMinimum={2}
              selectedMaximum={4}
              lineHeight={1.5}
            />
            <Button
              buttonStyle={{
                marginTop: 12
              }}
              backgroundColor='#7998fe'
              title='SAVE' />
          </Card>
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

const styles = StyleSheet.create({
  card_heading: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    padding: 20
  },
  setting: {
    fontWeight: 'bold',
    fontSize: 18
  },
  slider: {
    flex: 1,
    height: 70,
    padding: 35
  }
});
