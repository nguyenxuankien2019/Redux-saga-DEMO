import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, FlatList, SafeAreaView } from 'react-native';

class TrackListScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
           <Text> TrackListScreen</Text>
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

export default TrackListScreen;
