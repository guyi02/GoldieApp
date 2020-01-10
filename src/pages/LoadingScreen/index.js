import React, { Component } from 'react';
import Assets from '~/services/imagesImport';
import AsyncStorage from '@react-native-community/async-storage';

import { Container, Logo, Texto, Indicador } from './styles';

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const {
      navigation: { navigate },
    } = this.props;
    let credStorage = await AsyncStorage.getItem('@user:credentials');
    const credential = JSON.parse(credStorage);

    let userStorage = await AsyncStorage.getItem('@user:user');
    const user = JSON.parse(userStorage);

    setTimeout(() => {
      this.setState({ loading: false });
      if (user?.token != null || user?.token != undefined) {
        navigate('AppStack');
      } else if (credential != null || credential != undefined) {
        navigate('Login');
      } else {
        navigate('AuthStack');
      }
    }, 5000);
  }
  render() {
    return (
      <Container>
        <Logo source={Assets.newLogo} resizeMode="center" />
        <Texto>Carregando SplashScreen</Texto>
        {this.state.loading ? <Indicador /> : null}
      </Container>
    );
  }
}
