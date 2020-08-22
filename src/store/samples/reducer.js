import { Map } from 'immutable';

import { FETCH_SAMPLES_REQUEST, FETCH_SAMPLES_SUCCESS } from './actions';

export const initialState = Map({
  list: Map({
    data: [],
    loading: false
  }),
  item: Map({
    data: null,
    loading: false,
    errors: null
  })
})

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SAMPLES_REQUEST:
      return state.set('loading', true);
    case FETCH_SAMPLES_SUCCESS:
      return state.set('loading', false).setIn(['list', 'data'], action.payload);
    default:
      return state;
  }
}
