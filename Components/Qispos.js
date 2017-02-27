import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class Qispos extends Component {
    render() {
        return (
            <WebView source={{ uri: 'http://www.tu-berlin.de/login_pw/parameter/mobil/' }} />
        );
    }
}