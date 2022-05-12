import { createApi } from '@reduxjs/toolkit/query/react';

import customBaseQuery from './customBaseQuery';

export default createApi({
  reducerPath: 'articleApi',
  baseQuery: customBaseQuery,

  keepUnusedDataFor: 0,
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,

  tagTypes: ['Article', 'Category', 'Tag', 'Work'],

  endpoints: () => ({}),
});
