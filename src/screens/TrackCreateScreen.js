import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import Map from './Components/Map';
import {Text} from 'react-native-elements';
class SigninScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <Text h3>Track Create Screen</Text>
                <Map/>
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
        backgroundColor: '#F5FCFF',
    },

})

export default SigninScreen;
