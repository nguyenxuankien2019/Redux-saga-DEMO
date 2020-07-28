import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, TextInput } from 'react-native';
//  import Input from '../component/Input';
import { connect } from 'react-redux';
import { loginAction,clearToken } from '../redux/actions/loginAction';

// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }
class Login extends Component {
    constructor(props){
        super(props);
        this.state = { email: '', password: '',token: props.token }
    }
    
    componentDidMount(){
       this.props.clearToken();
    }
    componentDidUpdate(preProps,preState){
        if (this.props.loginSuccess ) {
            this.props.navigation.navigate('Home');
        }
    }
  
    render() {
        console.log(this.props, 'tokennn');
        console.log(this.state, 'statestate');
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
                   <View>
                     {this.state.validate && <Text>{'Tai khoan khong hop le'}</Text>}  
                       </View>
                <Button
                    style={styles.buttonLogin} title='Login'
                    onPress={this.login} />
            </View>
        );
    }
    login = () => {
            let payload = {
                "email": this.state.email,
                "password": this.state.password
            }
            this.props.loginAction(payload);
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
        margin: 10,
    }
})

function mapStateToProps(state) {
    return {
        token: state.login.token,
        loginSuccess: state.login.loginSuccess
    };
}

const mapDispatchToProps = {
    loginAction,
    clearToken
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);