import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList, SafeAreaView } from 'react-native';
import { SocialIcon } from 'react-native-elements'

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

<SocialIcon
  type='twitter'
/>

<SocialIcon
  raised={false}
  type='gitlab'
/>

<SocialIcon
  light
  type='medium'
/>

<SocialIcon
  light
  raised={false}
  type='medium'
/>


<SocialIcon
  title='Sign In With Facebook'
  button
  type='facebook'
/>

<SocialIcon
  title='Some Twitter Message'
  button
  type='twitter'
/>

<SocialIcon
  button
  type='medium'
/>

<SocialIcon
  button
  light
  type='instagram'
/>
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
