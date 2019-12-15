import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Homepage from '../pages/Homepage';

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Stack key="root" hideNavBar={true}>
					<Scene key="login" component={Login} title="Login" initial={true} />
					<Scene key="register" component={Register} title="Register"  />
					<Scene key="homepage" component={Homepage}/>
				</Stack>
			</Router>
		)
	}
}