import React, { useState, useContext } from 'react';
import { View, StyleSheet,  TouchableOpacity, Text } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from './Components/AuthForm';
import NavLink from './Components/NavLink';

const SigninScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);

    return (
        <>
            <View style={styles.container}>
            <AuthForm
            headerText = "Sign In for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText = "Sign In"
            onSubmit = {({ email, password}) => signup({email, password})}
            />
            <NavLink
            navigation={navigation}
            routeName="Signup"
            text="Do not have an account? Sign up instead"
            />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    existAccount:{
        marginBottom: 20,
        marginRight:20,
        width:'100%',
        alignItems:'flex-end'
    }

})

export default SigninScreen;
