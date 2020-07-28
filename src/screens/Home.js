import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, TextInput } from 'react-native';
//  import Input from '../component/Input';

class Home extends Component {
    state = { email: '', password: '' }
    
    render() {
        return (
            <View style={styles.container} >
                <Text>Home screens</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttonLogin: {
        marginTop: 50,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'grey',
        borderWidth: 1,
        margin:10,
    }
})

export default Home;