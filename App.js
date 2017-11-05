import React, { Component } from 'react';
import { View, Button, Alert, StyleSheet, TextInput,
Text, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements'


let lunchOptions = [{
    name: 'Don King',
    imageUrl: {uri: 'https://goo.gl/JwgvfS'}
  },
  {
    name: 'La Rotisserie',
    imageUrl: {uri: 'https://goo.gl/JwgvfS'}
  },
  {
    name: 'Ramen',
    imageUrl: {uri: 'https://goo.gl/JwgvfS'}
  },
  {
    name: 'Hotdogs',
    imageUrl: {uri: 'https://goo.gl/JwgvfS'}
  }]

export default class FlexExample extends Component {

  state = {
    todaysLunchSuggestion: ''
  }

  _onButtonPress = () => {
    let todaysLunch = lunchOptions[Math.floor(Math.random() * lunchOptions.length)];
    this.setState({ todaysLunchSuggestion: todaysLunch.name})
  }

  _onOptionEntered = (text) => {
    lunchOptions = [...lunchOptions, {name: text, imageUrl: 'https://goo.gl/JwgvfS'}]
  }

  lunchList = () => {
    return (lunchOptions.map( (o, i) => {
      <Text style={{color: 'black'}} key={i}> {o} </Text>
    }))
  }

  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <View style={{flex: 1, backgroundColor: 'rgba(78,130,238,1)'}}>
          <TextInput
            // style={{height: 40, marginTop: 70, marginLeft: 20, marginRight: 20}}
            // placeholder="Add a New Lunch Option"
            // onEndEditing={(text) => this._onOptionEntered(text)}
          />
        </View>
        <View style={{flex: 2, backgroundColor: 'rgba(255,219,24,1)', alignItems: 'center', justifyContent: 'center'}}>
          <Button style={styles.button}
            onPress={this._onButtonPress}
          title="Choose Lunch"/>
        </View>
        <View style={{flex: 3, backgroundColor: 'rgba(244,100,100,1)', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ color: 'white', fontSize: 20 }}>{this.state.todaysLunchSuggestion}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#56DFFF',
    borderRadius: 4,
  },
})
