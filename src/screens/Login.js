import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, TextInput } from 'react-native';
//  import Input from '../component/Input';
import { connect } from 'react-redux';
import {loginAction} from '../redux/actions/loginAction';

class Login extends Component {
    state = { email: '', password: '' }
    
    render() {
        console.log(this.props);
        return (
            <View style={styles.container} >
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    onChangeText={(value) => this.setState({ email: value })} />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry
                    onChangeText={(value) => this.setState({ password: value })} />
                <Button
                    style={styles.buttonLogin} title='Login'
                    onPress={this.login} />
            </View>
        );
    }
    login =() =>{
        // this.props.navigation.navigate('Home');
        this.props.loginAction({'userId': 1})
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttonLogin: {
        marginTop: 50,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'grey',
        borderWidth: 1,
        margin:10,
    }
})

function mapStateToProps(state) {
    return {
        currentUser: state.login.currentUser
    };
  }
  
  const mapDispatchToProps = {
    loginAction
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(Login);