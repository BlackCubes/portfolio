import { IPaginationResponse, ITag } from 'common/models';

import coreSplitApi from './coreSplitApi';

const params = {
  fields: '_,id,name,slug',
};

type TGetTagsResponse = IPaginationResponse & {
  items: ITag[];
};

const tagExtendedApi = coreSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<TGetTagsResponse, void>({
      query: () => ({
        url: '/tags/',
        params,
      }),

      providesTags: ['Tag'],
    }),

    getTagById: builder.query<ITag, number>({
      query: (id) => ({
        url: `/tags/${id}/`,
        params,
      }),

      providesTags: ['Tag'],
    }),
  }),

  overrideExisting: false,
});

export const { useGetTagByIdQuery, useGetTagsQuery } = tagExtendedApi;
