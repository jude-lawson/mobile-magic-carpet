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
      goHome: false,
      minRating: 2,
      maxRating: 4,
      minPrice: 2,
      maxPrice: 3,
      minRadius: 2,
      maxRadius: 4
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
              selectedMinimum={this.state.minRadius}
              selectedMaximum={this.state.maxRadius}
              lineHeight={1.5}
              onValueChange={selectedMinimum => this.setState({ minRadius: selectedMinimum })}
              onValueChange={selectedMaximum => this.setState({ maxRadius: selectedMaximum })}
            />
            <Text style={styles.setting}>
              Price(Yelp $):
            </Text>
            <RangeSlider style={styles.slider}
              minValue={1}
              maxValue={4}
              tintColor={'#9659fb'}
              selectedMinimum={this.state.minPrice}
              selectedMaximum={this.state.maxPrice}
              lineHeight={1.5}
              onValueChange={selectedMinimum => this.setState({ minPrice: selectedMinimum })}
              onValueChange={selectedMaximum => this.setState({ maxPrice: selectedMaximum })}
            />
            <Text style={styles.setting}>
              Rating(stars):
            </Text>
            <RangeSlider style={styles.slider}
              minValue={1}
              maxValue={5}
              tintColor={'#9659fb'}
              selectedMinimum={this.state.minRating}
              selectedMaximum={this.state.maxRating}
              lineHeight={1.5}
              onValueChange={selectedMinimum => this.setState({ minRating: selectedMinimum })}
              onValueChange={selectedMaximum => this.setState({ maxRating: selectedMaximum })}
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
