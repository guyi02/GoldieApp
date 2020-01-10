import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// CREATORS
const { Types, Creators } = createActions({
  setListRequest: [''],
  setListSuccess: ['data'],
  setListFailure: ['data'],
});

export const ListTypes = Types;
export default Creators;

// INITIAL STATE
export const INITIAL_STATE = Immutable({
  empresas: [],
});

// REDUCER
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LIST_SUCCESS]: (state, {data: {data}}) => state.merge({empresas:data}),
  [Types.SET_LIST_FAILURE]: (state, { data }) =>
    state.merge({ isError: data.data.error }),
});
