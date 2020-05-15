import { takeEvery } from 'redux-saga/effects';
import {
  fetchAllBicyclesData,
  addNewBicycleRequest,
} from './sagas/bicyclesSagas';

export function* rootSaga() {
  yield takeEvery('FETCH_ALL_BICYCLES_DATA', fetchAllBicyclesData);
  yield takeEvery('ADD_NEW_BIKE', addNewBicycleRequest);
}
