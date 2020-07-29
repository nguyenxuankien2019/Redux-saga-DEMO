import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, FlatList, SafeAreaView,TouchableOpacity } from 'react-native';

class AccountScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
          <SafeAreaView style={styles.container}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('TrackList')}>
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


export default AccountScreen;
