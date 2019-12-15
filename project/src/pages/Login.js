import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/style.auth';

import axios from 'axios';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component {

    signUp() {
        Actions.register()
    }

    onAuth(){
        Actions.homepage()
    }

    handleSubmit = event =>{

        const user = {
            email: this.state.name,
            password: this.state.password,
        };

        axios.post('http://192.168.1.108:5000/auth/login', { user })
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form type='Login' onAuth={() => this.onAuth()}/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.signUp}><Text style={styles.signupButton}> Sign up</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}