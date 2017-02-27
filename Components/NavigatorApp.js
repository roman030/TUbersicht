import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator,
  TouchableHighlight,
  BackAndroid
} from 'react-native';

import Landing from './Landing';
import Homepage from './Homepage';
import Isis from './Isis';
import Mail from './Mail';
import Moses from './Moses';
import Qispos from './Qispos';
import routes from '../utils/routes';

let navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    }
    return false;
});

export default class NavigatorApp extends Component {

    render() {
        return (
            <Navigator
                ref={(nav) => { navigator = nav; }}
                initialRoute={ routes[0] }
                renderScene={(route, navigator) => {
                    switch(route.title) {
                        case 'landing': 
                            return (
                                <Landing 
                                    handleWebsite={() => {
                                        navigator.push({
                                            title: 'website'
                                        })
                                    }} 
                                    handleIsis={() => {
                                        navigator.push({
                                            title: 'isis'
                                        })
                                    }}
                                    handleMail={() => {
                                        navigator.push({
                                            title: 'mail'
                                        })
                                    }}
                                    handleMoses={() => {
                                        navigator.push({
                                            title: 'moses'
                                        })
                                    }}
                                    handleQispos={() => {
                                        navigator.push({
                                            title: 'qispos'
                                        })
                                    }

                                    } 
                                />
                            );
                        case 'website':
                            return (
                                <Homepage />
                            )
                        case 'isis':
                            return (
                                <Isis />
                            )
                        case 'mail':
                            return (
                                <Mail />
                            )
                        case 'moses':
                            return (
                                <Moses />
                            )
                        case 'qispos':
                            return (
                                <Qispos />
                            )
                        default: 
                            break;
                    }
                }}
            />
        );
    }
}