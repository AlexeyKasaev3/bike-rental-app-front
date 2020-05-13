import { combineReducers } from 'redux';
import {
  bicyclesReducer,
  bicyclesFetchStatusReducer,
} from './reducers/bicyclesReducers';

export const rootReducer = combineReducers({bicycles: bicyclesReducer, bicyclesFetchStatus: bicyclesFetchStatusReducer});
