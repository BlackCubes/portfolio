import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/dist/query';

import { createAppStore, nextReduxWrapper } from 'app';
import {
  getRunningOperationPromises,
  getSlugsFromWorks,
  getWorkBySlug,
  useGetWorkBySlugQuery,
} from 'app/api/workExtendedApi';

import LoadingIcon from 'common/components/LoadingIcon';
import NotFound from 'common/components/NotFound';
import PageContainer from 'common/components/PageContainer';
import WithLoadingOverlay from 'common/components/WithLoadingOverlay';

import { WorkDetail } from 'components/work';

import environment from 'environment';

import { isLoadingOverall } from 'utils';

export const getStaticPaths = async () => {
  const store = createAppStore();

  const slugsFromWorks = await store.dispatch(getSlugsFromWorks.initiate());

  const paths = slugsFromWorks.data?.items.map((slugFromWork) => ({
    params: {
      slug: slugFromWork.meta.slug,
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

    if (typeof slug === 'string') store.dispatch(getWorkBySlug.initiate(slug));

    await Promise.all(getRunningOperationPromises());

    return {
      props: {},
    };
  }
);

const Work: NextPage = () => {
  const router = useRouter();

  const slug = router.query.slug;

  const {
    data: workData,
    isError: workError,
    isFetching: workFetching,
  } = useGetWorkBySlugQuery(typeof slug === 'string' ? slug : skipToken, {
    skip: router.isFallback,
  });

  return (
    <>
      <Head>
        <title>
          {workData
            ? `${
                workData.meta.seo_title.length > 0
                  ? workData.meta.seo_title
                  : workData.title
              } - Work | Elias Gutierrez, Software Engineer`
            : ''}
        </title>

        <meta
          name="description"
          content={
            workData
              ? workData.meta.search_description.length > 0
                ? workData.meta.search_description
                : workData.description
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
            workData
              ? `${
                  workData.meta.seo_title.length > 0
                    ? workData.meta.seo_title
                    : workData.title
                }`
              : ''
          }
        />

        <meta
          property="og:description"
          content={
            workData
              ? workData.meta.search_description.length > 0
                ? workData.meta.search_description
                : workData.description
              : ''
          }
        />

        <meta
          property="og:image"
          content={
            workData
              ? workData.main_image
                ? environment.isProduction
                  ? workData.main_image
                  : environment.apiRoute + workData.main_image
                : '/no-image.png'
              : '/no-image.png'
          }
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content={
            typeof slug === 'string'
              ? `${environment.webRoute}/work/${slug}`
              : '/'
          }
        />

        <meta
          property="twitter:title"
          content={
            workData
              ? `${
                  workData.meta.seo_title.length > 0
                    ? workData.meta.seo_title
                    : workData.title
                }`
              : ''
          }
        />

        <meta
          property="twitter:description"
          content={
            workData
              ? workData.meta.search_description.length > 0
                ? workData.meta.search_description
                : workData.description
              : ''
          }
        />

        <meta
          property="twitter:image"
          content={
            workData
              ? workData.main_image
                ? environment.isProduction
                  ? workData.main_image
                  : environment.apiRoute + workData.main_image
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
              ? `${environment.webRoute}/work/${slug}`
              : '/'
          }
        />
      </Head>

      <PageContainer>
        <WithLoadingOverlay
          contentComponent={
            workError ? (
              <NotFound />
            ) : (
              <>{workData && <WorkDetail workData={workData} />}</>
            )
          }
          isLoading={isLoadingOverall(workFetching)}
          loaderComponent={<LoadingIcon />}
          loaderDuration={1500}
        />
      </PageContainer>
    </>
  );
};

export default Work;
