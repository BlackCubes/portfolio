import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';

import articleApi from 'common/api/coreSplitApi';

export const createAppStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) =>
  configureStore({
    reducer: {
      [articleApi.reducerPath]: articleApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(articleApi.middleware),

    ...options,
  });

export const store = createAppStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
