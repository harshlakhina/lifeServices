import { store } from '../index';
import { userActions } from '../slices/userSlices';

export const setUserCredentials = (token: string) => {
  store.dispatch(userActions.setCredentials(token));
};
