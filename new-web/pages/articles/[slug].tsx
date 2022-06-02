import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/dist/query';

import { createAppStore, nextReduxWrapper } from 'app';
import {
  getArticlesByRelatedCategory,
  getArticleBySlug,
  getRunningOperationPromises,
  getSlugsFromArticles,
  useGetArticleBySlugQuery,
  useGetArticlesByRelatedCategoryQuery,
} from 'app/api/articleExtendedApi';

import LoadingIcon from 'common/components/LoadingIcon';
import NotFound from 'common/components/NotFound';
import PageContainer from 'common/components/PageContainer';
import WithLoadingOverlay from 'common/components/WithLoadingOverlay';

import environment from 'environment';

import { ArticleDetail, RelatedSidebar } from 'components/articles';

import { isLoadingOverall } from 'utils';

export const getStaticPaths = async () => {
  const store = createAppStore();

  const slugsFromArticles = await store.dispatch(
    getSlugsFromArticles.initiate()
  );

  const paths = slugsFromArticles.data?.map((slugFromArticle) => ({
    params: {
      slug: slugFromArticle.meta.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = nextReduxWrapper.getStaticProps(
  (store) => async (context) => {
    const slug = context.params?.slug;

    if (typeof slug === 'string')
      store.dispatch(getArticleBySlug.initiate(slug));

    await Promise.all(getRunningOperationPromises());

    store.dispatch(getArticlesByRelatedCategory.initiate(0));

    await Promise.all(getRunningOperationPromises());

    return {
      props: {},
    };
  }
);

const Article: NextPage = () => {
  const [
    doNotInitiateRelatedArticlesQuery,
    setDoNotInitiateRelatedArticlesQuery,
  ] = useState<boolean>(true);

  const router = useRouter();

  const slug = router.query.slug;
  const [categoryId, setCategoryId] = useState<number>(0);

  const {
    data: articleData,
    isError: articleError,
    isFetching: articleFetching,
  } = useGetArticleBySlugQuery(typeof slug === 'string' ? slug : skipToken, {
    skip: router.isFallback,
  });
  const {
    dataWithoutCurrentArticle: relatedArticlesByCategoryData,
    isFetching: relatedArticlesFetching,
  } = useGetArticlesByRelatedCategoryQuery(categoryId, {
    skip: doNotInitiateRelatedArticlesQuery,
    // selectFromResult is used to return related articles without the current
    // article in the current page view.
    selectFromResult: (result) => ({
      // Return original result from RTK for any debugging or needing it.
      ...result,
      // Create new property that returns the related articles without the
      // current one in the page view.
      dataWithoutCurrentArticle: result.data
        ? result.data.items.filter(
            // articleId is a string from URL params.
            (relatedArticle) =>
              typeof slug === 'string' && relatedArticle.meta.slug !== slug
          )
        : [],
    }),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (articleData) {
        setCategoryId(articleData.category?.id ?? 0);

        setDoNotInitiateRelatedArticlesQuery(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [articleData]);

  return (
    <>
      <Head>
        <title>
          {articleData
            ? `${
                articleData.meta.seo_title.length > 0
                  ? articleData.meta.seo_title
                  : articleData.title
              } - Articles | Elias Gutierrez, Software Engineer & Full-Stack Web
          Developer`
            : ''}
        </title>

        <meta
          name="title"
          content={
            articleData
              ? `${
                  articleData.meta.seo_title.length > 0
                    ? articleData.meta.seo_title
                    : articleData.title
                } - Articles | Elias Gutierrez, Software Engineer & Full-Stack Web
          Developer`
              : ''
          }
        />

        <meta
          name="description"
          content={
            articleData
              ? articleData.meta.search_description.length > 0
                ? articleData.meta.search_description
                : articleData.description
              : ''
          }
        />

        <meta property="og:site_name" content="Elias Gutierrez's Portfolio" />

        <meta
          property="og:title"
          content={
            articleData
              ? `${
                  articleData.meta.seo_title.length > 0
                    ? articleData.meta.seo_title
                    : articleData.title
                } - Articles | Elias Gutierrez, Software Engineer & Full-Stack Web
          Developer`
              : ''
          }
        />

        <meta
          property="og:description"
          content={
            articleData
              ? articleData.meta.search_description.length > 0
                ? articleData.meta.search_description
                : articleData.description
              : ''
          }
        />

        <meta
          property="og:image"
          content={
            articleData
              ? articleData.header_image
                ? environment.isProduction
                  ? articleData.header_image
                  : environment.apiRoute + articleData.header_image
                : '/no-image.png'
              : '/no-image.png'
          }
        />

        <meta property="og:image:height" content="720" />

        <meta property="og:image:width" content="1200" />

        <meta property="og:type" content="article" />

        <meta property="og:url" content={router.pathname} />

        <meta
          property="twitter:title"
          content={
            articleData
              ? `${
                  articleData.meta.seo_title.length > 0
                    ? articleData.meta.seo_title
                    : articleData.title
                } - Articles | Elias Gutierrez, Software Engineer & Full-Stack Web
          Developer`
              : ''
          }
        />

        <meta
          property="twitter:description"
          content={
            articleData
              ? articleData.meta.search_description.length > 0
                ? articleData.meta.search_description
                : articleData.description
              : ''
          }
        />

        <meta
          property="twitter:image"
          content={
            articleData
              ? articleData.header_image
                ? environment.isProduction
                  ? articleData.header_image
                  : environment.apiRoute + articleData.header_image
                : '/no-image.png'
              : '/no-image.png'
          }
        />

        <meta property="twitter:card" content="summary_large_image" />

        <meta property="twitter:creator" content="@_BlackCubes_" />

        <meta property="twitter:site" content="@_BlackCubes_" />

        <meta property="twitter:url" content={router.pathname} />
      </Head>

      <PageContainer extraClassName="article-detail-page">
        <WithLoadingOverlay
          contentComponent={
            articleError ? (
              <NotFound />
            ) : (
              <>
                {articleData && <ArticleDetail articleData={articleData} />}

                {relatedArticlesByCategoryData.length > 0 && (
                  <RelatedSidebar
                    relatedArticlesByCategoryData={
                      relatedArticlesByCategoryData
                    }
                  />
                )}
              </>
            )
          }
          isLoading={isLoadingOverall(articleFetching, relatedArticlesFetching)}
          loaderComponent={<LoadingIcon />}
          loaderDuration={1500}
        />
      </PageContainer>
    </>
  );
};

export default Article;
