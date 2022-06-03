import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { nextReduxWrapper } from 'app';
import {
  getArticles,
  getRunningOperationPromises as getArticlesRunningOperationPromises,
  useGetArticlesQuery,
} from 'app/api/articleExtendedApi';
import {
  getWorksByCategory,
  getRunningOperationPromises as getWorksRunningOperationPromises,
  useGetWorksByCategoryQuery,
} from 'app/api/workExtendedApi';

import LoadingIcon from 'common/components/LoadingIcon';
import PageContainer from 'common/components/PageContainer';
import WithLoadingOverlay from 'common/components/WithLoadingOverlay';

import {
  ArticleSection,
  HeroBanner,
  InitialSiteTransition,
  TalkSection,
  WorkSection,
} from 'components/home';

import { isLoadingOverall } from 'utils';

interface IHome {
  isFirstMount: boolean;
}

export const getStaticProps = nextReduxWrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(
      getArticles.initiate({
        category: 0,
        limit: 3,
        tags: [],
      })
    );

    await Promise.all(getArticlesRunningOperationPromises());

    store.dispatch(
      getWorksByCategory.initiate({
        category: 'Work',
        limit: 5,
      })
    );

    await Promise.all(getWorksRunningOperationPromises());

    return {
      props: {},
    };
  }
);

const Home: NextPage<IHome> = ({ isFirstMount }) => {
  const [finishIsFirstMount, setFinishIsFirstMount] = useState(isFirstMount);

  const { data: articlesData, isFetching: articlesFetching } =
    useGetArticlesQuery({
      category: 0,
      limit: 3,
      tags: [],
    });

  const { selectedData: worksData, isFetching: worksFetching } =
    useGetWorksByCategoryQuery(
      { category: 'Work', limit: 5 },
      {
        selectFromResult: (result) => ({
          ...result,
          selectedData: result.data
            ? result.data.items.filter(
                (resultData) => resultData.title !== 'Node News API'
              )
            : [],
        }),
      }
    );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isFirstMount) setFinishIsFirstMount(isFirstMount);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isFirstMount]);

  return (
    <>
      <Head>
        <title>
          Elias Gutierrez, Software Engineer & Full-Stack Web Developer
        </title>

        <meta
          name="title"
          content="Elias Gutierrez, Software Engineer & Full-Stack Web Developer"
        />

        <meta
          name="description"
          content="Software Engineer and Full-Stack Web Developer. Architecting the art and mathemical model to create beautiful user experiences."
        />

        <meta property="og:site_name" content="Elias Gutierrez's Portfolio" />

        <meta property="og:url" content="/" />

        <meta
          property="og:title"
          content="Elias Gutierrez, Software Engineer & Full-Stack Web Developer"
        />

        <meta
          property="og:description"
          content="Software Engineer and Full-Stack Web Developer. Architecting the art and mathemical model to create beautiful user experiences."
        />

        <meta property="og:type" content="website" />

        <meta property="og:image" content="/website-preview.png" />

        <meta property="twitter:card" content="summary_large_image" />

        <meta property="twitter:url" content="/" />

        <meta
          property="twitter:title"
          content="Elias Gutierrez, Software Engineer & Full-Stack Web Developer"
        />

        <meta
          property="twitter:description"
          content="Software Engineer and Full-Stack Web Developer. Architecting the art and mathemical model to create beautiful user experiences."
        />

        <meta property="twitter:image" content="/website-preview.png" />
      </Head>

      <PageContainer extraClassName="landing-list-page" isFirstMount={false}>
        <WithLoadingOverlay
          contentComponent={
            <>
              {finishIsFirstMount && (
                <InitialSiteTransition isFirstMount={isFirstMount} />
              )}

              <HeroBanner />

              <WorkSection
                finishIsFirstMount={finishIsFirstMount}
                worksData={worksData}
              />

              <ArticleSection
                articlesData={articlesData?.items ?? []}
                finishIsFirstMount={finishIsFirstMount}
              />

              <TalkSection finishIsFirstMount={finishIsFirstMount} />
            </>
          }
          isLoading={isLoadingOverall(worksFetching, articlesFetching)}
          loaderDuration={1000}
          {...(!finishIsFirstMount && {
            loaderComponent: <LoadingIcon />,
          })}
        />
      </PageContainer>
    </>
  );
};

export default Home;
