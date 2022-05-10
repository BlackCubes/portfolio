import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query';

import environment from 'environment';

const baseQuery = fetchBaseQuery({
  baseUrl: `${environment.apiRoute}/api/v1`,
});

const customBaseQuery: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  return result;
};

export default customBaseQuery;
