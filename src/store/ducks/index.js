import { combineReducers } from 'redux';
// USER
import { reducer as Login } from './Auth/login';
import { reducer as List } from './List/getList';

const reducers = combineReducers({
  Login,
  List,
});

export default reducers;
