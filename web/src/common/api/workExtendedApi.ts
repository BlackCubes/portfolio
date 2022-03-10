import { IPaginationResponse, IWork } from 'common/models';

import coreSplitApi from './coreSplitApi';

type TGetWorks = Pick<
  IWork,
  | 'category'
  | 'description'
  | 'first_released_at'
  | 'id'
  | 'main_image'
  | 'title'
  | 'uuid'
> & {
  meta: Pick<IWork['meta'], 'first_published_at' | 'slug'>;
};

type TGetWorksByCategoryRequest = {
  category: 'Work' | 'Personal';
  limit: number;
};

type TGetWorksByCategoryResponse = IPaginationResponse & {
  items: TGetWorks[];
};

const workExtendedApi = coreSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getWorksByCategory: builder.query<
      TGetWorksByCategoryResponse,
      TGetWorksByCategoryRequest
    >({
      query: ({ category, limit }) => {
        let categoryId: number = -1;

        if (category === 'Work') categoryId = 1;

        if (category === 'Personal') categoryId = 2;

        return {
          url: `/pages/?type=work.WorkPage&fields=_,id,uuid,title,slug,description,main_image,category,first_published_at,first_released_at&category=${categoryId}&limit=${limit}&order=-first_released_at`,
        };
      },

      providesTags: ['Work'],
    }),

    getWorkById: builder.query<IWork, number>({
      query: (id) => ({
        url: `/pages/${id}/?fields=_,id,uuid,first_published_at,slug,seo_title,search_description,title,description,main_image,first_released_at,category,body`,
      }),

      providesTags: ['Work'],
    }),
  }),

  overrideExisting: false,
});

export const { useGetWorkByIdQuery, useGetWorksByCategoryQuery } =
  workExtendedApi;
