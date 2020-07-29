import React, { Component } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../Components/Spacer';
class SigninScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <View style={styles.spacer}>
                    <View style={styles.spacer} />
                    <Text h3>Sign up for Tracker</Text>
                    <View style={styles.spacer} />
                    <Input label='Email' />
                    <View style={styles.spacer} />
                    <Input label='Password' />
                    <View style={styles.spacer} />
                    <Button title='Sign up' />
                </View>
            </>
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
    spacer: { margin: 10 }

})

export default SigninScreen;
