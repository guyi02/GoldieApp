import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// CREATORS
const { Types, Creators } = createActions({
  setGraphRequest: [''],
  setGraphSuccess: ['data'],
  setGraphFailure: ['data'],
});

export const GraphTypes = Types;
export default Creators;

// INITIAL STATE
export const INITIAL_STATE = Immutable({
  data: null,
});

// REDUCER
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_GRAPH_SUCCESS]: (state, {data: {data}}) => state.merge({data}),
  [Types.SET_GRAPH_FAILURE]: (state, { data }) =>
    state.merge({ isError: data.data.error }),
});
