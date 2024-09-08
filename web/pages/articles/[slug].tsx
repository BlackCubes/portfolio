import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/dist/query';

import { createAppStore, nextReduxWrapper } from 'app';
import {
  getArticleBySlug,
  getRunningOperationPromises,
  getSlugsFromArticles,
  useGetArticleBySlugQuery,
} from 'app/api/articleExtendedApi';

import LoadingIcon from 'common/components/LoadingIcon';
import NotFound from 'common/components/NotFound';
import PageContainer from 'common/components/PageContainer';
import WithLoadingOverlay from 'common/components/WithLoadingOverlay';

import environment from 'environment';

import { ArticleDetail } from 'components/articles';

import { isLoadingOverall } from 'utils';

export const getStaticPaths = async () => {
  const store = createAppStore();

  const slugsFromArticles = await store.dispatch(
    getSlugsFromArticles.initiate()
  );

  const paths = slugsFromArticles.data?.items.map((slugFromArticle) => ({
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

    return {
      props: {},
    };
  }
);

const Article: NextPage = () => {
  const router = useRouter();

  const slug = router.query.slug;

  const {
    data: articleData,
    isError: articleError,
    isFetching: articleFetching,
  } = useGetArticleBySlugQuery(typeof slug === 'string' ? slug : skipToken, {
    skip: router.isFallback,
  });

  return (
    <>
      <Head>
        <title>
          {articleData
            ? `${
                articleData.meta.seo_title.length > 0
                  ? articleData.meta.seo_title
                  : articleData.title
              } - Articles | Elias Gutierrez, Software Engineer`
            : ''}
        </title>

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

        <meta
          property="og:site_name"
          content="Elias Gutierrez, Software Engineer"
        />

        <meta
          property="og:title"
          content={
            articleData
              ? articleData.meta.seo_title.length > 0
                ? articleData.meta.seo_title
                : articleData.title
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

        <meta
          property="og:url"
          content={
            typeof slug === 'string'
              ? `${environment.webRoute}/articles/${slug}`
              : '/'
          }
        />

        <meta
          property="twitter:title"
          content={
            articleData
              ? articleData.meta.seo_title.length > 0
                ? articleData.meta.seo_title
                : articleData.title
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

        <meta
          property="twitter:url"
          content={
            typeof slug === 'string'
              ? `${environment.webRoute}/articles/${slug}`
              : '/'
          }
        />

        <meta
          property="article:published_time"
          content={articleData ? articleData.meta.first_published_at : ''}
        />

        <meta
          property="article:section"
          content={
            articleData
              ? articleData.category
                ? articleData.category.name
                : ''
              : ''
          }
        />

        {articleData &&
          articleData.tags.length > 0 &&
          articleData.tags.map((tag) => (
            <meta key={tag.id} property="article:tag" content={tag.name} />
          ))}

        <link
          rel="canonical"
          href={
            typeof slug === 'string'
              ? `${environment.webRoute}/articles/${slug}`
              : '/'
          }
          key="canonical"
        />
      </Head>

      <PageContainer extraClassName="article-detail-page">
        <WithLoadingOverlay
          contentComponent={
            articleError ? (
              <NotFound />
            ) : (
              <>{articleData && <ArticleDetail articleData={articleData} />}</>
            )
          }
          isLoading={isLoadingOverall(articleFetching)}
          loaderComponent={<LoadingIcon />}
          loaderDuration={1500}
        />
      </PageContainer>
    </>
  );
};

export default Article;
