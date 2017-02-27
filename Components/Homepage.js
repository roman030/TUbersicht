import React, { Component } from 'react';
import { WebView, BackAndroid } from 'react-native';


export default class Homepage extends Component {
    render() {
        return (
            <WebView source={{
                uri: 'http://m.tu-berlin.de/tubmobil/parameter/mobil/'
            }} />
        );
    }
}