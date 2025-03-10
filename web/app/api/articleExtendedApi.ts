import { IArticle, IPaginationResponse } from 'common/models';

import coreSplitApi from './coreSplitApi';

type TGetArticles = Pick<
  IArticle,
  | 'description'
  | 'header_image'
  | 'id'
  | 'title'
  | 'uuid'
  | 'reading_time'
  | 'category'
  | 'tags'
> & {
  meta: Pick<IArticle['meta'], 'slug' | 'first_published_at'>;
};

type TGetArticlesRequest = {
  category: number;
  limit?: number;
  offset?: number;
  orders: Array<{ name: 'first_published_at'; value: '' | '-' }> | [];
  tags: Array<number> | [];
};

type TGetArticlesResponse = IPaginationResponse & {
  items: TGetArticles[];
};

type TGetSlugsFromArticles = Pick<IArticle, 'id' | 'uuid'> & {
  meta: Pick<IArticle['meta'], 'slug'>;
};

type TGetSlugsFromArticlesResponse = IPaginationResponse & {
  items: TGetSlugsFromArticles[];
};

const articleExtendedApi = coreSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<TGetArticlesResponse, TGetArticlesRequest>({
      query: ({ category, limit, offset, orders, tags }) => {
        const params: Record<string, string | number> = {
          fields:
            '_,id,uuid,title,slug,description,header_image,tags,category,first_published_at,reading_time',
          type: 'article.ArticlePage',
        };

        if (category > 0) params.category = category;

        if (limit) params.limit = limit;

        if (offset) params.offset = offset;

        if (orders.length) {
          params.order = orders
            .map((order) => order.value + order.name)
            .join(',');
        }

        if (tags.length) params.tags__in = tags.join(',');

        return {
          url: '/pages/',
          params,
        };
      },

      providesTags: ['Article'],
    }),

    getArticleBySlug: builder.query<IArticle, string>({
      query: (slug) => ({
        url: `/pages/${slug}/`,
        params: {
          fields:
            '_,id,uuid,title,slug,description,header_image,body,tags,category,seo_title,search_description,first_published_at,reading_time',
        },
      }),

      providesTags: ['Article'],
    }),

    getSlugsFromArticles: builder.query<TGetSlugsFromArticlesResponse, void>({
      query: () => ({
        url: '/pages/',
        params: {
          fields: '_,id,uuid,slug',
          type: 'article.ArticlePage',
        },
      }),

      providesTags: ['Article'],
    }),
  }),

  overrideExisting: false,
});

// Export hooks for usage in functional components.
export const {
  useGetArticleBySlugQuery,
  useGetArticlesQuery,
  useGetSlugsFromArticlesQuery,
  util: { getRunningOperationPromises },
} = articleExtendedApi;

// Export endpoints for use in SRR (Next.js).
export const { getArticleBySlug, getArticles, getSlugsFromArticles } =
  articleExtendedApi.endpoints;
