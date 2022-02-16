import { IArticle, IPaginationResponse } from 'common/models';

import coreSplitApi from './coreSplitApi';

type TGetArticles = Pick<
  IArticle,
  'description' | 'header_image' | 'id' | 'title' | 'uuid'
> & {
  meta: Pick<IArticle['meta'], 'slug' | 'first_published_at'>;
};

type TGetArticlesResponse = IPaginationResponse & {
  items: TGetArticles[];
};

const articleExtendedApi = coreSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<TGetArticlesResponse, void>({
      query: () => ({
        url: '/pages/?type=article.ArticlePage&fields=_,id,uuid,title,slug,description,header_image,first_published_at',
      }),
      providesTags: ['Article'],
    }),

    getArticleById: builder.query<IArticle, number>({
      query: (id) => ({
        url: `/pages/${id}/?fields=_,id,uuid,title,slug,description,header_image,body,tags,categories,seo_title,search_description,first_published_at`,
      }),
      providesTags: ['Article'],
    }),
  }),

  overrideExisting: false,
});

export const { useGetArticleByIdQuery, useGetArticlesQuery } =
  articleExtendedApi;
