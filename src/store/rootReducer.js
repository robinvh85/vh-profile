import { combineReducers } from 'redux-immutable';
import app from './app/reducer';
import samples from './samples/reducer';


export default combineReducers({
  app,
  samples
});
