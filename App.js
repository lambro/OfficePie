import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

// export class HelloWorldApp extends Component {
//   render() {
//     return (
//       <Text>Hello world!</Text>
//     );
//   }
// }

class Greeting extends Component {
  render() {
    return ( <Text> Hello {this.props.name} !</Text> )
  }
}

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Kielbasa7.jpg/1200px-Kielbasa7.jpg'
    };
    return (
      <View style={{alignItems: 'center'}}> 
        <Image source={pic} style={{width: '100%', height: 110, marginTop: 24}}/>
        <Greeting name="Laura"/>
      </View>
    );
  }
}
