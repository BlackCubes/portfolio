import { ICategory, IPaginationResponse } from 'common/models';

import coreSplitApi from './coreSplitApi';

const fieldsParams = '_,uuid,name,id';

type TGetCategoriesResponse = IPaginationResponse & {
  items: ICategory[];
};

const categoryExtendedApi = coreSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<TGetCategoriesResponse, void>({
      query: () => ({ url: `/categories/?fields=${fieldsParams}` }),
      providesTags: ['Category'],
    }),

    getCategoryById: builder.query<ICategory, number>({
      query: (id) => ({ url: `/categories/${id}/?fields=${fieldsParams}` }),
      providesTags: ['Category'],
    }),
  }),

  overrideExisting: false,
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery } =
  categoryExtendedApi;
