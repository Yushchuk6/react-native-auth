import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/style.homepage'
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';


export default class Homepage extends Component {

    handleSubmit = () => {
        AsyncStorage
            .removeItem('token')
            .then(() => Actions.login())
            .catch(err => console.warn(err))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello!</Text>
                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                    <Text style={styles.buttonText}>Return</Text>
                </TouchableOpacity>
            </View>
        );
    }
}