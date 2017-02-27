import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import NavigatorApp from './Components/NavigatorApp';

export default class tubersicht extends Component {
  render() {
    return (
      <NavigatorApp />
    );
  }
}

AppRegistry.registerComponent('tubersicht', () => tubersicht);
