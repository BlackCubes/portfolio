import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';

import portfolioApi from 'common/api/coreSplitApi';

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

export const store = createAppStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
