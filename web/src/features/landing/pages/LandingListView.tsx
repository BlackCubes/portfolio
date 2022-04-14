import React, { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { useGetArticlesQuery } from 'common/api/articleExtendedApi';
import { useGetWorksByCategoryQuery } from 'common/api/workExtendedApi';

import LoadingIcon from 'common/components/LoadingIcon';
import LoadingOverlay from 'common/components/LoadingOverlay';
import SEO from 'common/components/SEO';

import {
  ArticleSection,
  HeroBanner,
  InitialSiteTransition,
  TalkSection,
  WorkSection,
} from 'features/landing/components';

import { isLoadingOverall } from 'utils';

import { PageContainer } from './styles';

interface ILandingListView {
  isFirstMount: boolean;
}

const LandingListView: FC<ILandingListView> = ({ isFirstMount }) => {
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
      if (!isFirstMount) {
        setFinishIsFirstMount(isFirstMount);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isFirstMount]);

  return (
    <motion.div
      key="landing-list"
      animate="animate"
      exit="exit"
      initial="initial"
      transition={{ duration: 1, ease: 'easeOut' }}
      variants={{
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '-100%', transition: { duration: 0.3 } },
        initial: { opacity: isFirstMount ? 1 : 0, x: 0 },
      }}
    >
      <SEO
        openGraphMetaTags={[
          {
            property: 'og:description',
            content:
              'Software Engineer and Full-Stack Web Developer. Architecturing the art and mathemical model to create beautiful user experiences.',
          },
          {
            property: 'og:image',
            content: `${window.location.origin}/website-preview.png`,
          },
          {
            property: 'og:site_name',
            content: "Elias Gutierrez's Portfolio",
          },
          {
            property: 'og:title',
            content:
              'Elias Gutierrez, Software Engineer & Full-Stack Web Developer',
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            property: 'og:url',
            content: window.location.href,
          },
        ]}
        primaryMetaTags={[
          {
            name: 'description',
            content:
              'Software Engineer and Full-Stack Web Developer. Architecturing the art and mathemical model to create beautiful user experiences.',
          },
          {
            name: 'title',
            content:
              'Elias Gutierrez, Software Engineer & Full-Stack Web Developer',
          },
        ]}
        title="Elias Gutierrez, Software Engineer & Full-Stack Web Developer"
        twitterMetaTags={[
          {
            property: 'twitter:card',
            content: 'summary',
          },
          {
            property: 'twitter:creator',
            content: '@_BlackCubes_',
          },
          {
            property: 'twitter:description',
            content:
              'Software Engineer and Full-Stack Web Developer. Architecturing the art and mathemical model to create beautiful user experiences.',
          },
          {
            property: 'twitter:image',
            content: `${window.location.origin}/website-preview.png`,
          },
          {
            property: 'twitter:site',
            content: '@_BlackCubes_',
          },
          {
            property: 'twitter:title',
            content:
              'Elias Gutierrez, Software Engineer & Full-Stack Web Developer',
          },
          {
            property: 'twitter:url',
            content: window.location.href,
          },
        ]}
      />

      <PageContainer className="default-container navbar-footer-space">
        <LoadingOverlay
          contentComponent={
            <>
              {finishIsFirstMount && (
                <InitialSiteTransition isFirstMount={isFirstMount} />
              )}

              <HeroBanner />

              <WorkSection worksData={worksData} />

              <ArticleSection articlesData={articlesData?.items ?? []} />

              <TalkSection />
            </>
          }
          isLoading={isLoadingOverall(worksFetching, articlesFetching)}
          loaderDuration={1000}
          {...(!finishIsFirstMount && {
            loaderComponent: <LoadingIcon />,
          })}
        />
      </PageContainer>
    </motion.div>
  );
};

export default LandingListView;
