import React, { useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../Components/Spacer';
const SigninScreen = ({ navigation }) => {
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');

    return (
        <>
            <View style={styles.container}>
                <View style={styles.spacer} />
                <Text h3>Sign up for Tracker</Text>
                <View style={styles.spacer} />

                <Input 
                label='Email'
                value={email}
                onChangeText={setEmail}
                autoCorrect={false}
                autoCapitalize='none' />
                <View style={styles.spacer} />

                <Input 
                label='Password' 
                value={password}
                onChangeText={setPassword}
                autoCorrect={false}
                autoCapitalize='none' 
                secureTextEntry />
                <View style={styles.spacer} />
                <Button containerStyle={styles.loginBtn} title='Sign up' />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    loginBtn: {
        width: '80%'
    },
    spacer: { margin: 10 }

})

export default SigninScreen;
