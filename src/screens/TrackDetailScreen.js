import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, FlatList, SafeAreaView } from 'react-native';

class TrackDetailScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
           <Text> TrackDetailScreen</Text>
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

export default TrackDetailScreen;
