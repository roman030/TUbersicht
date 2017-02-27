import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class Moses extends Component {
    render() {
        return (
            <WebView source={{ uri: 'https://moseskonto.tu-berlin.de/index.html' }} />
        );
    }
}