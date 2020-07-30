import React, {  } from 'react';
import { View, StyleSheet,  TouchableOpacity, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
    let points = [];
    for ( let i = 0; i < 20; i ++ ) {
        if( i % 2 === 0){
            points.push( {
                latitude: 37.78825 - i * 0.01,
                longitude: -122.4324 + i + 0.01
            })
        }else{
        points.push( {
            latitude: 37.78825 + i * 0.01,
            longitude: -122.4324 + i + 0.01
        })
    }
    }
    return (         
        <MapView
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        style={styles.map}>
                      <Polyline 
                      coordinates={points}
                      strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                      strokeColors={[
                          '#7F0000',
                          '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                          '#B24112',
                          '#E5845C',
                          '#238C23',
                          '#7F0000'
                      ]}
                      strokeWidth={6} />
            </MapView>
    );
}

const styles = StyleSheet.create({
    map:{
        height:300,
    }
})

export default Map;
