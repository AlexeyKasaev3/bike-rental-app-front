import { combineReducers } from 'redux';
import {
  bicyclesReducer,
  bicyclesFetchStatusReducer,
} from './reducers/bicyclesReducers';
import { addBicycleformReducer } from './reducers/addBicycleformReducer';

export const rootReducer = combineReducers({
  bicycles: bicyclesReducer,
  bicyclesFetchStatus: bicyclesFetchStatusReducer,
  addBicycleFormFetchStatus: addBicycleformReducer,
});
