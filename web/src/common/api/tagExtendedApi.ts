import { IPaginationResponse, ITag } from 'common/models';

import coreSplitApi from './coreSplitApi';

const fieldsParams = '_,id,name,slug';

type TGetTagsRespone = IPaginationResponse & {
  items: ITag[];
};

const tagExtendedApi = coreSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<TGetTagsRespone, void>({
      query: () => ({ url: `/tags/?fields=${fieldsParams}` }),
      providesTags: ['Tag'],
    }),

    getTagById: builder.query<ITag, number>({
      query: (id) => ({ url: `/tags/${id}/?fields=${fieldsParams}` }),
      providesTags: ['Tag'],
    }),
  }),

  overrideExisting: false,
});

export const { useGetTagByIdQuery, useGetTagsQuery } = tagExtendedApi;
