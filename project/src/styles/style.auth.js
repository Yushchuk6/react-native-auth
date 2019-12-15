import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#e6e6e6',
        alignItems:'center',
        justifyContent :'center'
      },
      signupTextCont : {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'row'
      },
      signupText: {
          color: 'black',
          fontSize: 13,
      },
      signupButton: {
          color:'lightskyblue',
          fontSize: 13,
          fontWeight:'500'
      }
});