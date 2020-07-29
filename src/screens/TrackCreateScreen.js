import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList, SafeAreaView } from 'react-native';

class SigninScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Account')}>
                <Text>Go to TrackListFlow</Text>
            </TouchableOpacity>
        </SafeAreaView>
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

})

export default SigninScreen;
