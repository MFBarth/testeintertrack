import { all } from 'redux-saga/effects';

import request from './request/sagas';

export default function* rootSaga() {
  return yield all([request]);
}
