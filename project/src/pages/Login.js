import React, { Component } from 'react';
import { Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/style.auth';

import axios from 'axios';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Welcome!' };
    }

    signUp = () => Actions.register()
    setEmail = (e) => this.setState({ email: e })
    setPwd = (e) => this.setState({ pwd: e })

    handleSubmit = () => {
        axios
            .post('http://192.168.1.132:5000/auth/login', {
                email: this.state.email,
                password: this.state.pwd,
            })
            .then(data => {
                if (data.data.success) {
                    AsyncStorage
                        .setItem('token', data.data.token)
                        .then(() => Actions.homepage())
                        .catch(err => console.warn(err))
                } else {
                    this.setState({ text: 'Smth went wrong. Try again.' })
                }
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo text={this.state.text} />
                <Form
                    type='Login'
                    auth={this.handleSubmit}
                    text={this.state.text}
                    setLogin={this.setEmail}
                    setPwd={this.setPwd}
                />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.signUp}><Text style={styles.signupButton}> Sign up</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}