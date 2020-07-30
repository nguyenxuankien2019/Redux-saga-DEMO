import React, { Component, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import Map from './Components/Map';
import { Text } from 'react-native-elements';
import RNLocation from 'react-native-location';

const SigninScreen = () => {
    const [err, setErr] = useState(null);
    const startWatching = async () => {
        try {
            RNLocation.requestPermission({
                ios: 'whenInUse', // or 'always'
                android: {
                    detail: 'coarse', // or 'fine'
                    rationale: {
                        title: "We need to access your location",
                        message: "We use your location to show where you are on the map",
                        buttonPositive: "OK",
                        buttonNegative: "Cancel"
                    }
                }
            });
        } catch (err) {
            setErr(err);
        }
    }

    useEffect(() => {
        startWatching();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Text h3>Track Create Screen</Text>
            <Map />
            <TouchableOpacity onPress={() => props.navigation.navigate('Account')}>
                <Text>Go to TrackListFlow</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

})

export default SigninScreen;
