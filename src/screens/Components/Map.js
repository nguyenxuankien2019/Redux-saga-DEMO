import React, {  } from 'react';
import { View, StyleSheet,  TouchableOpacity, Text } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {

    return (         
        <MapView
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        style={styles.map}/>
    );
}

const styles = StyleSheet.create({
    map:{
        height:300,
        width:'100%',
        backgroundColor:'red'
    }
})

export default Map;
