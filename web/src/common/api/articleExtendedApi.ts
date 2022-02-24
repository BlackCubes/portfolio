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
  | 'categories'
  | 'tags'
> & {
  meta: Pick<IArticle['meta'], 'slug' | 'first_published_at'>;
};

type TGetArticlesRequest = {
  categories: number;
  tags: Array<number> | [];
};

type TGetArticlesResponse = IPaginationResponse & {
  items: TGetArticles[];
};

const articleExtendedApi = coreSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<TGetArticlesResponse, TGetArticlesRequest>({
      query: ({ categories, tags }) => {
        let categoriesFiltering: string = '';
        let tagsFiltering: string = '';

        if (categories > 0) {
          categoriesFiltering += `&categories=${categories}`;
        } else {
          categoriesFiltering = '';
        }

        if (tags.length) {
          tagsFiltering += `&tags=${tags.join(',')}`;
        } else {
          tagsFiltering = '';
        }

        return {
          url: `/pages/?type=article.ArticlePage&fields=_,id,uuid,title,slug,description,header_image,tags,categories,first_published_at,reading_time${categoriesFiltering}${tagsFiltering}`,
        };
      },
      providesTags: ['Article'],
    }),

    getArticleById: builder.query<IArticle, number>({
      query: (id) => ({
        url: `/pages/${id}/?fields=_,id,uuid,title,slug,description,header_image,body,tags,categories,seo_title,search_description,first_published_at,reading_time`,
      }),
      providesTags: ['Article'],
    }),
  }),

  overrideExisting: false,
});

export const { useGetArticleByIdQuery, useGetArticlesQuery } =
  articleExtendedApi;
