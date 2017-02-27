import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class Mail extends Component {
    render() {
        return (
            <WebView source={{ uri: 'https://exchange.tu-berlin.de/owa/#path=/mail' }} />
        );
    }
}