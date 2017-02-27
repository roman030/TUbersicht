import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class Isis extends Component {
    render() {
        return (
            <WebView source={{ uri: 'https://isis.tu-berlin.de/auth/shibboleth/index.php' }} />
        );
    }
}