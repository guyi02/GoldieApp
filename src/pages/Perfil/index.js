import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';
// import { Container } from './styles';

export default class Perfil extends Component {
  handleLogout = async () => {
    let credStorage = await AsyncStorage.getItem('@user:credentials');
    const credential = JSON.parse(credStorage);

    let userStorage = await AsyncStorage.getItem('@user:user');
    const user = JSON.parse(userStorage);

    const res = await api.post('', {
      "opt": 'logout',
      "sign": credential.sign,
      "token": user.token,
    });
    if (res.data.status === 'ok') {
      await AsyncStorage.removeItem('@user:user');
      this.props.navigation.navigate('Login');
    } else {
      alert('opss erro');
    }
    // if (res.data.status) {

    // } else {
    //   this.setState({ loading: false });
    // }
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => this.handleLogout()}>
          <Text>logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
