import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

import axios from 'axios';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Homepage from '../pages/Homepage';

export default class Routes extends Component {

    state = {
        isUserLogin: false
    }

    componentWillMount() {
        this.checkUser()
    }

    checkUser = async () => {
        AsyncStorage
            .getItem('token')
            .then(token => {
                if (token) {
                    axios
                        .post('http://192.168.1.132:5000/auth/auth-check', { token })
                        .then(res => {
                            this.setState({ isUserLogin: res.data.success });
                        })
                }
            })
    }

    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login"
                        component={Login}
                        title="Login"
                        initial={!this.state.isUserLogin}
                    />
                    <Scene key="register"
                        component={Register}
                        title="Register"
                    />
                    <Scene key="homepage"
                        component={Homepage}
                        initial={this.state.isUserLogin}
                    />
                </Stack>
            </Router>
        )
    }
}