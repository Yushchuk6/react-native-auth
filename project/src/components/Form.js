import React, { Component } from 'react';
import {
  Text,
  KeyboardAvoidingView ,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import styles from '../styles/style.form'

export default class Logo extends Component{

	render(){
		return(
			<KeyboardAvoidingView  style={styles.container} behavior='padding'>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "dimgray"
              keyboardType="email-address"
              autoCapitalize='none'
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "dimgray"
              ref={input => this.password = input}
              />  
           <TouchableOpacity style={styles.button} onPress={this.props.onAuth}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
  		</KeyboardAvoidingView >
			)
	}
}

