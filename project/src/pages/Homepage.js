import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/style.homepage'
import { Actions } from 'react-native-router-flux';


export default class Homepage extends Component {

    returnBack(){
        Actions.pop()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello!</Text>
                <TouchableOpacity style={styles.button} onPress={this.returnBack}>
                    <Text style={styles.buttonText}>Return</Text>
                </TouchableOpacity>
            </View>
        );
    }
}