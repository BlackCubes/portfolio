import React, { FC } from 'react';
import { motion } from 'framer-motion';

import { useGetWorksByCategoryQuery } from 'common/api/workExtendedApi';

import LoadingIcon from 'common/components/LoadingIcon';
import SEO from 'common/components/SEO';
import WithLoadingOverlay from 'common/components/WithLoadingOverlay';

import { PersonalList, WorkList } from 'features/work/components';

import { isLoadingOverall } from 'utils';

import { PageContainer } from './styles';

const WorkListView: FC = () => {
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
    <motion.div
      key="work-list"
      animate="animate"
      exit="exit"
      initial="initial"
      transition={{ duration: 1, ease: 'easeOut' }}
      variants={{
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '-100%', transition: { duration: 0.3 } },
        initial: { opacity: 0, x: 0 },
      }}
    >
      <SEO
        openGraphMetaTags={[
          {
            property: 'og:description',
            content: 'Latest Work and Projects by Elias Gutierrez',
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
              'Work | Elias Gutierrez, Software Engineer & Full-Stack Web Developer',
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
            content: 'Latest Work and Projects by Elias Gutierrez',
          },
          {
            name: 'title',
            content:
              'Work | Elias Gutierrez, Software Engineer & Full-Stack Web Developer',
          },
        ]}
        title="Work | Elias Gutierrez, Software Engineer & Full-Stack Web Developer"
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
            content: 'Latest Work and Projects by Elias Gutierrez',
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
              'Work | Elias Gutierrez, Software Engineer & Full-Stack Web Developer',
          },
          {
            property: 'twitter:url',
            content: window.location.href,
          },
        ]}
      />

      <PageContainer className="default-container navbar-footer-space">
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
    </motion.div>
  );
};

export default WorkListView;
