import type { NextPage } from 'next';
import Head from 'next/head';

import { nextReduxWrapper } from 'app';
import {
  getWorksByCategory,
  getRunningOperationPromises,
  useGetWorksByCategoryQuery,
} from 'app/api/workExtendedApi';

import LoadingIcon from 'common/components/LoadingIcon';
import PageContainer from 'common/components/PageContainer';
import WithLoadingOverlay from 'common/components/WithLoadingOverlay';

import { PersonalList, WorkList } from 'components/work';

import environment from 'environment';

import { isLoadingOverall } from 'utils';

export const getStaticProps = nextReduxWrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(
      getWorksByCategory.initiate({
        category: 'Work',
        limit: 4,
      })
    );

    await Promise.all(getRunningOperationPromises());

    store.dispatch(
      getWorksByCategory.initiate({
        category: 'Personal',
        limit: 4,
      })
    );

    await Promise.all(getRunningOperationPromises());

    return {
      props: {},
    };
  }
);

const Work: NextPage = () => {
  const { data: worksData, isFetching: worksFetching } =
    useGetWorksByCategoryQuery({
      category: 'Work',
      limit: 4,
    });
  const { data: personalsData, isFetching: personalsFetching } =
    useGetWorksByCategoryQuery({
      category: 'Personal',
      limit: 4,
    });

  return (
    <>
      <Head>
        <title>Work | Elias Gutierrez, Software Engineer</title>

        <meta
          name="description"
          content="Latest Work and Projects by Elias Gutierrez"
        />

        <meta
          property="og:site_name"
          content="Elias Gutierrez, Software Engineer"
        />

        <meta property="og:title" content="Work" />

        <meta
          property="og:description"
          content="Latest Work and Projects by Elias Gutierrez"
        />

        <meta property="og:image" content="/website-preview.png" />

        <meta property="og:type" content="website" />

        <meta property="og:url" content={`${environment.webRoute}/work`} />

        <meta property="twitter:title" content="Work" />

        <meta
          property="twitter:description"
          content="Latest Work and Projects by Elias Gutierrez"
        />

        <meta property="twitter:image" content="/website-preview.png" />

        <meta property="twitter:card" content="summary_large_image" />

        <meta property="twitter:creator" content="@_BlackCubes_" />

        <meta property="twitter:site" content="@_BlackCubes_" />

        <meta property="twitter:url" content={`${environment.webRoute}/work`} />

        <link
          rel="canonical"
          href={`${environment.webRoute}/work`}
          key="canonical"
        />
      </Head>

      <PageContainer>
        <WithLoadingOverlay
          contentComponent={
            <>
              <WorkList worksData={worksData?.items ?? []} />

              <PersonalList personalsData={personalsData?.items ?? []} />
            </>
          }
          isLoading={isLoadingOverall(worksFetching, personalsFetching)}
          loaderComponent={<LoadingIcon />}
          loaderDuration={1000}
        />
      </PageContainer>
    </>
  );
};

export default Work;
