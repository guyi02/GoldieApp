import api from '~/services/api';
import { put, call } from 'redux-saga/effects';
import ListActions from '~/store/ducks/List/getList';
import AsyncStorage from '@react-native-community/async-storage';

export function* getList() {
  try {
    let credStorage = yield AsyncStorage.getItem('@user:credentials');
    const credential = JSON.parse(credStorage);

    let userStorage = yield AsyncStorage.getItem('@user:user');
    const user = JSON.parse(userStorage);

    const response = yield call(api.get, '', {
      params: {
        opt: 'list',
        sign: credential.sign,
        token: user.token,
      },
    });

    yield put(ListActions.setListSuccess(response.data));
  } catch (err) {
    // yield put(ListActions.setListFailure(err.response));
  }
}

export function* Register({ user }) {
  // try {
  //     const response = yield call(api.post, 'login', { data: user });
  //     yield put(LoginActions.setLoginSuccess(response.data));
  //     alert(user)
  // } catch (err) {
  //     yield put(LoginActions.setLoginFailure(err.response))
  //     alert(err)
  // }
}
