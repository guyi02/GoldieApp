import React, { useState, useEffect } from 'react';
import {
  Container,
  Form,
  InputText,
  ImageLogo,
  HeaderArea,
  ButtonConfirm,
  TextButtonConfirm,
  ButtonLogout,
  TextButtonLogout,
} from './styles';
import { Platform, ActivityIndicator, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const { goBack } = navigation;
    const userStorage = await AsyncStorage.getItem('@user:credentials');
    const userInfo = JSON.parse(userStorage);

    if (userInfo == '' || userInfo == null) {
      goBack();
    } else {
      setData(userInfo);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    if (username === '') {
      alert('Campo usuário vazio!');
      setLoading(false);
    } else if (password === '') {
      alert('Campo senha vazio!');
      setLoading(false);
    } else {

      const res = await api.post('', {
        "opt": 'user',
        "sign": data.sign,
        username,
        password,
      });

      if (res.data.status) {
        await AsyncStorage.setItem(
          '@user:user',
          JSON.stringify({ ...res.data.data, token: res.data.token })
        );
        setLoading(false);
        navigation.navigate('AppStack');
      } else {
        setLoading(false);
        alert(res.data.message);
      }
    }
  };

  const logout = async () => {
    const { goBack } = navigation;
    await AsyncStorage.removeItem('@user:credentials');
    goBack();
  };

  return !data || loading ? (
    <ActivityIndicator />
  ) : (
    <Container
      behavior={Platform.select({
        ios: 'padding',
        android: null,
      })}
    >
      <HeaderArea>
        <StatusBar barStyle="light-content" />
        <ImageLogo resizeMode="contain" source={{ uri: data.logo }} />
      </HeaderArea>

      <Form>
        <InputText
          placeholder="Usuário"
          value={username}
          autoCapitalize={false}
          onChangeText={username => setUsername(username)}
          returnKeyType="next"
        />

        <InputText
          secureTextEntry={true}
          placeholder="Senha"
          value={password}
          onChangeText={password => setPassword(password)}
          returnKeyType="send"
          onSubmitEditing={() => alert('executa função de login')}
        />

        <ButtonConfirm clientStyle={data.background_1} onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <TextButtonConfirm>Entrar</TextButtonConfirm>
          )}
        </ButtonConfirm>

        <ButtonLogout onPress={logout}>
          <TextButtonLogout>Deslogar</TextButtonLogout>
        </ButtonLogout>
      </Form>
    </Container>
  );
};
export default Login;
