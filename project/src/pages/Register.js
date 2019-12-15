import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/style.auth';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Register extends Component {

    returnBack() {
        Actions.pop()
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form type='Register' />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.returnBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}