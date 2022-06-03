import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { nextReduxWrapper } from 'app';

import {
  getArticles,
  getRunningOperationPromises as getArticlesRunningOperationPromises,
  useGetArticlesQuery,
} from 'app/api/articleExtendedApi';
import {
  getCategories,
  getRunningOperationPromises as getCategoriesRunningOperationPromises,
  useGetCategoriesQuery,
} from 'app/api/categoryExtendedApi';
import {
  getTags,
  getRunningOperationPromises as getTagsRunningOperationPromises,
  useGetTagsQuery,
} from 'app/api/tagExtendedApi';

import LoadingIcon from 'common/components/LoadingIcon';
import PageContainer from 'common/components/PageContainer';
import WithLoadingOverlay from 'common/components/WithLoadingOverlay';

import {
  ArticleList,
  ArticleListPaginationContainer,
  FilterSidebar,
  Pagination,
} from 'components/articles';

import environment from 'environment';

import { isLoadingOverall } from 'utils';

type TCategoryTagIdQueryState = {
  category: number;
  tags: Array<number> | [];
};

export const getStaticProps = nextReduxWrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(
      getArticles.initiate({
        category: 0,
        limit: 5,
        offset: 0,
        tags: [],
      })
    );

    await Promise.all(getArticlesRunningOperationPromises());

    store.dispatch(getCategories.initiate());

    await Promise.all(getCategoriesRunningOperationPromises());

    store.dispatch(getTags.initiate());

    await Promise.all(getTagsRunningOperationPromises());

    return {
      props: {},
    };
  }
);

const Articles: NextPage = () => {
  const [categoryTagIdQuery, setCategoryTagIdQuery] =
    useState<TCategoryTagIdQueryState>({
      category: 0,
      tags: [],
    });

  const paginationLimit = 5;
  const [paginationOffset, setPaginationOffset] = useState(0);

  const { data: articlesData, isFetching: articlesFetching } =
    useGetArticlesQuery({
      category: categoryTagIdQuery.category,
      limit: paginationLimit,
      offset: paginationOffset,
      tags: categoryTagIdQuery.tags,
    });
  const { data: categoriesData, isFetching: categoriesFetching } =
    useGetCategoriesQuery();
  const { data: tagsData, isFetching: tagsFetching } = useGetTagsQuery();

  /**
   * Used to dynamically change the filtering to update the article API based
   * on category and/or tags.
   *
   * It checks first if the category has been selected by the user, and if so
   * then it inserts the category ID if that ID does not exist. If the ID does
   * exist, then it 'removes' it since it is assumed that the user has 'unchecked'
   * that particular category.
   *
   * If the user selected tags, then it checks first if the tag exists in the
   * array, and if it does then it 'removes' it since it is assumed that the
   * user has 'unchecked' that particular tag.
   *
   * But, if the tag does not exist in the array, then it is assumed that
   * the user has 'checked' that particular tag which is then inserted.
   * @param categoryTagName
   * @param categoryTagId
   */
  const handleCategoryTagQuery = (
    categoryTagName: 'category' | 'tags',
    categoryTagId: number
  ) => {
    setCategoryTagIdQuery((prevCategoryTagIdQuery) => {
      // If the user is selecting a category, then insert the category ID.
      if (categoryTagName === 'category') {
        return {
          ...prevCategoryTagIdQuery,
          [categoryTagName]:
            // If the category ID exists, then remove it since the user has
            // 'unchecked' it. Otherwise, add the category ID.
            prevCategoryTagIdQuery.category === categoryTagId
              ? 0
              : categoryTagId,
        };
      }

      // Check if the tag ID exists.
      const existingTag = prevCategoryTagIdQuery[categoryTagName].find(
        (oldTagId) => oldTagId === categoryTagId
      );

      // If the tag ID exists, remove it since the user has 'unchecked' it.
      if (existingTag) {
        return {
          ...prevCategoryTagIdQuery,
          [categoryTagName]: prevCategoryTagIdQuery[categoryTagName].filter(
            (oldTagId) => oldTagId !== categoryTagId
          ),
        };
      }

      // If the tag ID does not exist, add it since the user has 'checked' it.
      return {
        ...prevCategoryTagIdQuery,
        [categoryTagName]: [
          ...prevCategoryTagIdQuery[categoryTagName],
          categoryTagId,
        ],
      };
    });
  };

  /**
   * Dynamically clears the filtering for the Article API on category and/or
   * tags.
   *
   * For case ``'clearAll'``, it resets the category and tags to what it was
   * initially.
   *
   * As a safety return, if no cases are brought forth, then it returns the
   * current state.
   * @param clearCase
   */
  const handleClearFiltering = (clearCase: 'clearAll') => {
    setCategoryTagIdQuery((prevCategoryTagIdQuery) => {
      if (clearCase === 'clearAll') {
        return {
          ...prevCategoryTagIdQuery,
          category: 0,
          tags: [],
        };
      }

      return {
        ...prevCategoryTagIdQuery,
      };
    });
  };

  const handlePagination = (offsetNumber: number) => {
    setPaginationOffset(offsetNumber);
  };

  return (
    <>
      <Head>
        <title>Articles | Elias Gutierrez, Software Engineer</title>

        <meta name="description" content="Latest Articles by Elias Gutierrez" />

        <meta
          property="og:site_name"
          content="Elias Gutierrez, Software Engineer"
        />

        <meta property="og:title" content="Articles" />

        <meta
          property="og:description"
          content="Latest Articles by Elias Gutierrez"
        />

        <meta property="og:image" content="/website-preview.png" />

        <meta property="og:type" content="article" />

        <meta property="og:url" content={`${environment.webRoute}/articles`} />

        <meta property="twitter:title" content="Articles" />

        <meta
          property="twitter:description"
          content="Latest Articles by Elias Gutierrez"
        />

        <meta property="twitter:image" content="/website-preview.png" />

        <meta property="twitter:card" content="summary" />

        <meta property="twitter:creator" content="@_BlackCubes_" />

        <meta property="twitter:site" content="@_BlackCubes_" />

        <meta
          property="twitter:url"
          content={`${environment.webRoute}/articles`}
        />
      </Head>

      <PageContainer extraClassName="article-list-page">
        <WithLoadingOverlay
          contentComponent={
            <>
              {categoriesData?.items &&
                categoriesData.items.length > 0 &&
                tagsData?.items &&
                tagsData.items.length > 0 && (
                  <FilterSidebar
                    categoriesData={categoriesData.items}
                    handleCategoryTagQuery={handleCategoryTagQuery}
                    handleClearFilter={handleClearFiltering}
                    tagsData={tagsData.items}
                  />
                )}

              {articlesData && (
                <ArticleListPaginationContainer>
                  <ArticleList articlesData={articlesData.items} />

                  <Pagination
                    handlePagination={handlePagination}
                    limitNumber={paginationLimit}
                    offsetNumber={paginationOffset}
                    totalCount={articlesData.meta.total_count}
                  />
                </ArticleListPaginationContainer>
              )}
            </>
          }
          isLoading={isLoadingOverall(
            articlesFetching,
            categoriesFetching,
            tagsFetching
          )}
          loaderComponent={<LoadingIcon />}
          loaderDuration={1000}
        />
      </PageContainer>
    </>
  );
};

export default Articles;
