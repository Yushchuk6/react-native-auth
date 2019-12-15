import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from '../styles/style.logo'


export default class Logo extends Component {
	render(){
		return(
			<View style={styles.container}>
          	<Text style={styles.logoText}>Welcome!</Text>	
  			</View>
			)
	}
}