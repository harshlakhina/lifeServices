import { combineReducers } from 'redux';
import { userReducer } from './slices/userSlices';
import { baseApi } from './api/baseapi';

export const rootReducer = combineReducers({
  user: userReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
