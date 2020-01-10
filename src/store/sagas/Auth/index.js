import api from '~/services/api';
import { put, call } from 'redux-saga/effects';
import LoginActions from '~/store/ducks/Auth/login';

import { navigate } from '~/services/navigationService';

export function* Login({ user }) {
  // try {
  //     const response = yield call(api.post, 'login', { data: user });
  //     yield put(LoginActions.setLoginSuccess(response.data));
  //     alert(user)
  // } catch (err) {
  //     yield put(LoginActions.setLoginFailure(err.response))
  //     alert(err)
  // }
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
