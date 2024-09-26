import { createApi } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import customBaseQuery from './customBaseQuery';

export default createApi({
  reducerPath: 'portfolioApi',
  baseQuery: customBaseQuery,

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },

  keepUnusedDataFor: 0,
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,

  tagTypes: ['Article', 'Category', 'Tag'],

  endpoints: () => ({}),
});
