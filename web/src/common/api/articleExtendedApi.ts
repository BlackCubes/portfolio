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

const articleExtendedApi = coreSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<TGetArticlesResponse, TGetArticlesRequest>({
      query: ({ category, limit, offset, tags }) => {
        let categoryFiltering: string = '';
        let limitPagination: string = '';
        let offsetPagination: string = '';
        let tagsFiltering: string = '';

        if (category > 0) {
          categoryFiltering += `&category=${category}`;
        } else {
          categoryFiltering = '';
        }

        if (limit) {
          limitPagination = `&limit=${limit}`;
        } else {
          limitPagination = '';
        }

        if (offsetPagination) {
          offsetPagination = `&offset=${offset}`;
        } else {
          offsetPagination = '';
        }

        if (tags.length) {
          tagsFiltering += `&tags__in=${tags.join(',')}`;
        } else {
          tagsFiltering = '';
        }

        return {
          url: `/pages/?type=article.ArticlePage&fields=_,id,uuid,title,slug,description,header_image,tags,category,first_published_at,reading_time${categoryFiltering}${tagsFiltering}${limitPagination}${offsetPagination}`,
        };
      },
      providesTags: ['Article'],
    }),

    getArticleBySlug: builder.query<IArticle, string>({
      query: (slug) => ({
        url: `/pages/${slug}/?fields=_,id,uuid,title,slug,description,header_image,body,tags,category,seo_title,search_description,first_published_at,reading_time`,
      }),
      providesTags: ['Article'],
    }),

    getArticlesByRelatedCategory: builder.query<
      TGetArticlesByRelatedCategoryResponse,
      number
    >({
      query: (categoryId) => ({
        url: `/pages/?type=article.ArticlePage&fields=_,id,uuid,title,slug,header_image&category=${categoryId}&limit=5`,
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
} = articleExtendedApi;
