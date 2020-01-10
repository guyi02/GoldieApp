import { all, takeLatest } from 'redux-saga/effects';
// Types USER
import { LoginTypes } from '~/store/ducks/Auth/login';
import { ListTypes } from '~/store/ducks/List/getList';

// INITIALIZES
import { Login, Register } from './Auth/';
import { getList } from './GetList/';

export default function* rootSaga() {
  yield all([
    takeLatest(LoginTypes.SET_LOGIN_REQUEST, Login),
    takeLatest(ListTypes.SET_LIST_REQUEST, getList),
    // takeLatest(RegisterTypes.SET_REGISTER_REQUEST, Register),
  ]);
}
