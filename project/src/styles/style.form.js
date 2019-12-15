import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255,255,0.2)',
        paddingHorizontal: 16,
        paddingVertical:10,
        fontSize: 16,
        color: 'black',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#404040',
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }

});