import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import portfolioApi from 'common/api/coreSplitApi';

import environment from 'environment';

export const createAppStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) =>
  configureStore({
    reducer: {
      [portfolioApi.reducerPath]: portfolioApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(portfolioApi.middleware),

    ...options,
  });

export type AppStore = ReturnType<typeof createAppStore>;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];

export const nextReduxWrapper = createWrapper<AppStore>(createAppStore, {
  debug: !environment.isProduction,
});
