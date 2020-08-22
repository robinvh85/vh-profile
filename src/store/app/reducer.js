import {
  INIT_APP_START,
  INIT_APP_FINISH,
  SET_APP_MESSAGE,
  CLEAR_APP_MESSAGE
} from './actions';
import { Map } from 'immutable';

const initialState = Map({
  loading: false,
  initialSuccess: false,
  errors: [],
  message: null
});

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_APP_START:
      return state.setIn(['loading'], true);
    case INIT_APP_FINISH:
      return state
        .set('loading', false)
        .set('initialSuccess', true);
    case SET_APP_MESSAGE:
      return state
        .set('message', action.payload);
    case CLEAR_APP_MESSAGE:
      return state
        .set('message', null)
    default:
      return state;
  }
}
