import React, { Component } from 'react';
import {
  Container,
  HeaderArea,
  Form,
  InputText,
  ImageLogo,
  ButtonConfirm,
  TextButtonConfirm,
} from './styles';
import assets from '~/services/imagesImport';
import { Platform, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';

export default class Credencials extends Component {
  static navigationOptions = { header: null };

  state = {
    user: '',
  };

  handleCredencials = async () => {
    const {navigation: {navigate}} = this.props;
    const { user } = this.state;
    if (user === '') {
      alert('Campo vazio!');
    } else {
      // eslint-disable-line no-use-before-define
      const res = await api.post('', {
        "opt": 'credential',
        "sign": user,
      });
      if (res.data.status && res.data.data != null) {
        await AsyncStorage.setItem(
          '@user:credentials',
          JSON.stringify({ ...res.data.data, sign: user })
        );


        navigate('Login');
      } else {
        alert(res.data.message);
      }
    }
  };

  render() {
    const { user } = this.state;
    return (
      <Container
        behavior={Platform.select({
          ios: 'padding',
          android: null,
        })}
      >
        <HeaderArea>
        <StatusBar barStyle="light-content" />
          <ImageLogo source={assets.logoOpacity} />
        </HeaderArea>
        <Form>
          <InputText
            placeholder="Nome da sua loja"
            value={user}
            autoCapitalize={false}
            onChangeText={user => this.setState({ user })}
          />
          <ButtonConfirm onPress={() => this.handleCredencials()}>
            <TextButtonConfirm>Continuar</TextButtonConfirm>
          </ButtonConfirm>
        </Form>
      </Container>
    );
  }
}
