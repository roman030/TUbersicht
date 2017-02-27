import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

export default class Landing extends Component {
    render() {
        return (
            <View style={styles.container} >
            <Text style={styles.header}>
                TUbersicht
            </Text>
                <View style={styles.wrapper} >
                    <TouchableHighlight style={styles.button} onPress={this.props.handleWebsite}>
                        <Text style={styles.text} >HOMEPAGE</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={this.props.handleIsis}>
                        <Text style={styles.text} >ISIS</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={this.props.handleMail}>
                        <Text style={styles.text} >MAIL</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={this.props.handleMoses}>
                        <Text style={styles.text} >MOSES</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={this.props.handleQispos}>
                        <Text style={styles.text} >QISPOS</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    wrapper: {
        padding: 50,
        borderColor: '#777',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: '#EAEAEA'
    },
    header: {
        marginBottom: 50,
        fontSize: 40
    },
    button: {
        width: 150,
        padding: 10,
        margin: 10,
        borderColor: '#777',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#C50E1F'
    },
    text: {
        fontFamily: "monospace",
        color: '#F5FCFF',
        textAlign: 'center'
    }
})