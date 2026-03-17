import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import RootReducers from './root-reducer';
import { rootSaga } from './root-saga';

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: RootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleWare),
});

rootSaga.forEach(sagaMiddleWare.run);
export default store;
