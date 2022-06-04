import { ICategory, IPaginationResponse } from 'common/models';

import coreSplitApi from './coreSplitApi';

const params = {
  fields: '_,uuid,name,id',
};

type TGetCategoriesResponse = IPaginationResponse & {
  items: ICategory[];
};

const categoryExtendedApi = coreSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<TGetCategoriesResponse, void>({
      query: () => ({
        url: '/article-categories/',
        params,
      }),

      providesTags: ['Category'],
    }),

    getCategoryById: builder.query<ICategory, number>({
      query: (id) => ({
        url: `/article-categories/${id}/`,
        params,
      }),

      providesTags: ['Category'],
    }),
  }),

  overrideExisting: false,
});

// Export hooks for usage in functional components.
export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  util: { getRunningOperationPromises },
} = categoryExtendedApi;

// Export endpoints for use in SRR (Next.js).
export const { getCategories, getCategoryById } = categoryExtendedApi.endpoints;
