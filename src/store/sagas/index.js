import { all, takeLatest } from 'redux-saga/effects';
// Types USER
import { LoginTypes } from '~/store/ducks/Auth/login';
import { ListTypes } from '~/store/ducks/List/getList';
import { GraphTypes } from '~/store/ducks/Graph/sendGraph';

// INITIALIZES
import { Login, Register } from './Auth/';
import { getList } from './GetList/';
import { getGraph } from './Graph/';

export default function* rootSaga() {
  yield all([
    takeLatest(LoginTypes.SET_LOGIN_REQUEST, Login),
    takeLatest(ListTypes.SET_LIST_REQUEST, getList),
    takeLatest(GraphTypes.SET_GRAPH_REQUEST, getGraph),
    // takeLatest(RegisterTypes.SET_REGISTER_REQUEST, Register),
  ]);
}
