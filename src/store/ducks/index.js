import { combineReducers } from 'redux';
// USER
import { reducer as Login } from './Auth/login';
import { reducer as List } from './List/getList';
import { reducer as Graph } from './Graph/sendGraph';

const reducers = combineReducers({
  Login,
  List,
  Graph
});

export default reducers;
