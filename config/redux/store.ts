import { configureStore } from '@reduxjs/toolkit';
import { identityApi } from '../react-query/slices/identityApi';
import { accountApi } from '../react-query/slices/accountApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import logger from 'redux-logger';

const middlerware = [identityApi.middleware, accountApi.middleware]
const enhancer = [...middlerware];
if (process.env.NODE_ENV !== 'development') {
  enhancer.push(logger)
}

const store = configureStore({
  reducer: {
    [identityApi.reducerPath]: identityApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(enhancer),
});

setupListeners(store.dispatch)

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
