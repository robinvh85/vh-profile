import { all } from 'redux-saga/effects';
import app from './app/saga';
import samples from './samples/saga';

export default function* rootSaga() {
  yield all([
    app(),
    samples()
  ]);
}
