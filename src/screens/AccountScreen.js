import React, { useState, useContext } from 'react';
import { View, StyleSheet, Image, Text, FlatList,TouchableOpacity } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView, } from 'react-navigation';
import { Button } from 'react-native-elements'

const AccountScreen = (props) => {
    const { state,signout } = useContext(AuthContext);
    console.log(state,'statee');
 
    return (
        <SafeAreaView style={styles.container}>
            <Button
                    onPress={() => signout()}
                    title={"Log out"} />
         
            
        </SafeAreaView>
      );
      
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

})


export default AccountScreen;
