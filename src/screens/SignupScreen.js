import React, { useState, useContext } from 'react';
import { View, StyleSheet,  TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
        
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
    {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage} </Text>:  null}
                <Button
                    onPress={() => signup({ email, password })}
                    containerStyle={styles.loginBtn} title='Sign up' />
          
          <View style={styles.spacer} />
          <TouchableOpacity 
          style={styles.existAccount}
          onPress={()=> navigation.navigate('Signin')}>
              <Text style={{color:'green'}}>Already have an account? Sign in instead </Text>
          </TouchableOpacity>
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
    spacer: { margin: 10 },
    errorMessage:{
        marginBottom: 10,
        width:'100%',
        color:'red',
    },
    existAccount:{
        marginBottom: 10,
        marginRight:20,
        width:'100%',
        alignItems:'flex-end'
    }

})

export default SigninScreen;
