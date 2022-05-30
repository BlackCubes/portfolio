import { ICategory, IPaginationResponse } from 'common/models';

import coreSplitApi from './coreSplitApi';

const fields = '_,uuid,name,id';

type TGetCategoriesResponse = IPaginationResponse & {
  items: ICategory[];
};

const categoryExtendedApi = coreSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<TGetCategoriesResponse, void>({
      query: () => ({
        url: '/article-categories/',
        fields,
      }),

      providesTags: ['Category'],
    }),

    getCategoryById: builder.query<ICategory, number>({
      query: (id) => ({
        url: `/article-categories/${id}/`,
        fields,
      }),

      providesTags: ['Category'],
    }),
  }),

  overrideExisting: false,
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery } =
  categoryExtendedApi;
