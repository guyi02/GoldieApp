import api from '~/services/api';
import { put, call } from 'redux-saga/effects';
import GraphActions from '~/store/ducks/Graph/sendGraph';
import AsyncStorage from '@react-native-community/async-storage';


export function* getGraph() {
  try {
    let credStorage = yield AsyncStorage.getItem('@user:credentials');
    const credential = JSON.parse(credStorage);

    let userStorage = yield AsyncStorage.getItem('@user:user');
    const user = JSON.parse(userStorage);

    const response = yield call(api.post, '', {
        opt: 'charts',
        sign: credential.sign,
        token: user.token,
    });

    yield put(GraphActions.setGraphSuccess(response));
  } catch (err) {
    // yield put(ListActions.setListFailure(err.response));
  }
}
