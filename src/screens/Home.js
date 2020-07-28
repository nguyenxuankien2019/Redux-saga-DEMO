import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, FlatList, SafeAreaView } from 'react-native';
import { getUserAction } from '../redux/actions/getUser';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { currentUser: [] }
    }

    componentDidMount() {
        this.setState({ currentUser: [] });
        this.props.getUserAction();
    }
    componentDidUpdate(preProps, preState) {
        if (preProps.currentUser != this.props.currentUser) {
            this.setState({ currentUser: this.props.currentUser })
        }
    }
    render() {

        return (
            <SafeAreaView style={styles.container}>
                <FlatList style={styles.flatlist}
                    data={this.state.currentUser}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    }
    renderItem = ({ item }) => (
        <Item email={item.email} 
        first_name={item.first_name} 
        avatar={item.avatar} 
        last_name={item.last_name} 
        />
    );
}
const Item = ({ avatar, email, first_name, last_name }) => (
    <View style={styles.item}>
        <Text style={styles.text}>{email}</Text>
        <Text style={styles.text}>{first_name} {last_name}</Text>
        <Image
          style={styles.tinyLogo}
          source={{uri: avatar}}
        />
    </View>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    flatlist:{
        width: '100%',
        margin: 10
    },
    buttonLogin: {
        marginTop: 50,
    },
    item: {
        width: '100%',
        borderColor: 'grey',
        borderWidth: 1,
        margin: 10,
    },
    text:{
        marginVertical: 5
    },
    tinyLogo: {
        width: 50,
        height: 50,
        marginVertical: 5
      },
})

function mapStateToProps(state) {
    return {
        currentUser: state.getUser.currentUser
    };
}

const mapDispatchToProps = {
    getUserAction
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
