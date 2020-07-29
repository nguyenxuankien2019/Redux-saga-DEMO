import React, {  } from 'react';
import { View, StyleSheet,  TouchableOpacity, Text } from 'react-native';

const NavLink = ({ navigation, text, routeName }) => {

    return (  
          <TouchableOpacity 
          style={styles.existAccount}
          onPress={()=> navigation.navigate(routeName)}>
              <Text style={{color:'green'}}>{text}</Text>
          </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    existAccount:{
        marginBottom: 20,
        marginRight:20,
        width:'100%',
        alignItems:'flex-end'
    }

})

export default NavLink;
