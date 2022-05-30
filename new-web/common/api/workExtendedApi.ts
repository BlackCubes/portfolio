import { IPaginationResponse, IWork } from 'common/models';

import coreSplitApi from './coreSplitApi';

type TGetWorks = Pick<
  IWork,
  | 'category'
  | 'description'
  | 'first_released_at'
  | 'id'
  | 'logo_image'
  | 'title'
  | 'uuid'
  | 'work_url'
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

type TGetSlugsFromWorks = Pick<IWork, 'id' | 'uuid'> & {
  meta: Pick<IWork['meta'], 'slug'>;
};

type TGetSlugsFromWorksResponse = TGetSlugsFromWorks[];

const workExtendedApi = coreSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getWorksByCategory: builder.query<
      TGetWorksByCategoryResponse,
      TGetWorksByCategoryRequest
    >({
      query: ({ category, limit }) => ({
        url: '/pages/',
        params: {
          category: category === 'Work' ? 1 : 2,
          fields:
            '_,id,uuid,title,slug,description,logo_image,work_url,category,first_published_at,first_released_at',
          limit,
          order: '-first_released_at',
          show_to_public: true,
          type: 'work.WorkPage',
        },
      }),

      providesTags: ['Work'],
    }),

    getWorkBySlug: builder.query<IWork, string>({
      query: (slug) => ({
        url: `/pages/${slug}/`,
        params: {
          fields:
            '_,id,uuid,first_published_at,slug,seo_title,search_description,title,description,main_image,logo_image,company,work_url,first_released_at,category,body',
          show_to_public: true,
        },
      }),

      providesTags: ['Work'],
    }),

    getSlugsFromWorks: builder.query<TGetSlugsFromWorksResponse, void>({
      query: () => ({
        url: '/pages/',
        params: {
          fields: '_id,uuid,slug',
          show_to_public: true,
          type: 'work.WorkPage',
        },
      }),

      providesTags: ['Work'],
    }),
  }),

  overrideExisting: false,
});

// Export hooks for usage in functional components.
export const {
  useGetSlugsFromWorksQuery,
  useGetWorkBySlugQuery,
  useGetWorksByCategoryQuery,
} = workExtendedApi;

// Export endpoints for use in SRR (Next.js).
export const { getSlugsFromWorks, getWorkBySlug, getWorksByCategory } =
  workExtendedApi.endpoints;
