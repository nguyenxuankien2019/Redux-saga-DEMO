import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, FlatList, SafeAreaView,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
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
              <Button
  title="Solid Button"
/>

<Button
  title="Outline button"
  type="outline"
/>

<Button
  title="Clear button"
  type="clear"
/>

<Button
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  title="Button with icon component"
/>

<Button
  icon={{
    name: "arrow-right",
    size: 15,
    color: "white"
  }}
  title="Button with icon object"
/>

<Button
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  iconRight
  title="Button with right icon"
/>

<Button
  title="Loading button"
  loading
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


export default AccountScreen;
