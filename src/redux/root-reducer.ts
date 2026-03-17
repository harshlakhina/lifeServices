import { combineReducers } from 'redux';
import AuthReducer from '../screens/auth/slice';

const RootReducers = combineReducers({
  auth: AuthReducer,
});

export default RootReducers;
