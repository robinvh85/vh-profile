import { put, takeLatest } from 'redux-saga/effects';

import { FETCH_SAMPLES_REQUEST, FETCH_SAMPLES_SUCCESS } from './actions';
// import * as SampleApi from 'api/app/samples';

export function* fetchMasterData() {
  // const response = yield call(SampleApi.getAll);

  const response = [
    { id: 1, name: 'sample 1' },
    {id: 2, name: 'sample 2'}
  ]

  yield put({ type: FETCH_SAMPLES_SUCCESS, payload: response });
}

export default function* actionWatcher() {
  yield takeLatest(FETCH_SAMPLES_REQUEST, fetchMasterData);
}
