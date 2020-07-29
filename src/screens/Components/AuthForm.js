
import React, { useState, useContext } from 'react';
import { View, StyleSheet,  TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import { Context as AuthContext } from '../../context/AuthContext';


const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
        
    return(
<View style={styles.container}>
<View style={styles.spacer} />
    <Text h3>{headerText}</Text>
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
    {errorMessage ? <Text style={styles.errorMessage}>{errorMessage} </Text>:  null}
                <Button
                    onPress={() => onSubmit({ email, password })}
                    containerStyle={styles.loginBtn} 
                    title={submitButtonText} />
          
          <View style={styles.spacer} />
</View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
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

export default AuthForm;
