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
  tags: Array<number> | [];
};

type TGetArticlesResponse = IPaginationResponse & {
  items: TGetArticles[];
};

type TGetArticlesByRelatedCategory = Pick<
  IArticle,
  'header_image' | 'id' | 'title' | 'uuid'
> & {
  meta: Pick<IArticle['meta'], 'slug'>;
};

type TGetArticlesByRelatedCategoryResponse = IPaginationResponse & {
  items: TGetArticlesByRelatedCategory[];
};

type TGetSlugsFromArticles = Pick<IArticle, 'id' | 'uuid'> & {
  meta: Pick<IArticle['meta'], 'slug'>;
};

type TGetSlugsFromArticlesResponse = TGetSlugsFromArticles[];

const articleExtendedApi = coreSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<TGetArticlesResponse, TGetArticlesRequest>({
      query: ({ category, limit, offset, tags }) => {
        const params: Record<string, string | number> = {
          fields:
            '_,id,uuid,title,slug,description,header_image,tags,category,first_published_at,reading_time',
          type: 'article.ArticlePage',
        };

        if (category > 0) params.category = category;

        if (limit) params.limit = limit;

        if (offset) params.offset = offset;

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

    getArticlesByRelatedCategory: builder.query<
      TGetArticlesByRelatedCategoryResponse,
      number
    >({
      query: (categoryId) => ({
        url: '/pages/',
        params: {
          category: categoryId,
          fields: '_,id,uuid,title,slug,header_image',
          limit: 5,
          type: 'article.ArticlePage',
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

export const {
  useGetArticleBySlugQuery,
  useGetArticlesByRelatedCategoryQuery,
  useGetArticlesQuery,
  useGetSlugsFromArticlesQuery,
} = articleExtendedApi;
