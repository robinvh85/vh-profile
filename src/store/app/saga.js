import { takeLatest } from 'redux-saga/effects';

import {
  CHANGE_LOCATION
} from './actions';
import history from 'browserHistory';

export function* changeLocation({ payload }) {
  yield history.push(payload);
}

export default function* actionWatcher() {
  yield takeLatest(CHANGE_LOCATION, changeLocation);
}
