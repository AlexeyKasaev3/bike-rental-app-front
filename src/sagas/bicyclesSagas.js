import { put, call } from 'redux-saga/effects';
import * as requestToServer from '../service/axios';

export function* fetchAllBicyclesData() {
  let bicycles;
  yield put({ type: 'BICYCLES_FETCH_PROCCESS' });
  try {
    bicycles = yield call(requestToServer.getAllBicycles);
  } catch (error) {
    yield put({ type: 'BICYCLES_FETCH_ERROR' });
  }
  yield put({ type: 'BICYCLES_FETCHED', payload: bicycles });
  yield put({ type: 'BICYCLES_FETCH_SUCCESS' });
}

export function* addNewBicycleRequest(action) {
  try {
    yield put({ type: 'BICYCLE_ADD_PROCCESS' });
    const bicycles = yield call(requestToServer.addNewBicycle, action.payload);
    yield put({ type: 'BICYCLE_ADDED', payload: bicycles });
    yield put({ type: 'BICYCLES_ADD_SUCCESS' });
  } catch (error) {
    yield put({ type: 'BICYCLES_ADD_ERROR' });
  }
}
