import React, { useState, useContext } from 'react';
import { View, StyleSheet, Image, Text, FlatList, SafeAreaView,TouchableOpacity } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = (props) => {
    const { state,signout } = useContext(AuthContext);
    console.log(state,'statee');
 
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={ () => signout()}>
                <Text>Log out</Text>
            </TouchableOpacity>
            
        </View>
      );
      
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

})


export default AccountScreen;
