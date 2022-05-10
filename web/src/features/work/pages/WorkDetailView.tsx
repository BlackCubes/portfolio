import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import noImage from 'assets/img/no-image.png';

import { useGetWorkBySlugQuery } from 'common/api/workExtendedApi';

import LoadingIcon from 'common/components/LoadingIcon';
import NotFound from 'common/components/NotFound';
import PageContainer from 'common/components/PageContainer';
import SEO from 'common/components/SEO';
import WithLoadingOverlay from 'common/components/WithLoadingOverlay';

import environment from 'environment';

import { WorkDetail } from 'features/work/components';

import { isLoadingOverall } from 'utils';

type TWorkParams = {
  workSlug: string;
};

const WorkDetailView: FC = () => {
  const [doNotInitiateWorkQuery, setDoNotInitiateWorkQuery] =
    useState<boolean>(true);

  const { workSlug } = useParams<TWorkParams>();

  const {
    data: workData,
    isError: workError,
    isFetching: workFetching,
  } = useGetWorkBySlugQuery(workSlug ?? 'does-not-exist', {
    skip: doNotInitiateWorkQuery,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (workSlug) {
        setDoNotInitiateWorkQuery(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [workSlug]);

  return (
    <>
      {workData && (
        <SEO
          openGraphMetaTags={[
            {
              property: 'og:description',
              content:
                workData.meta.search_description.length > 0
                  ? workData.meta.search_description
                  : workData.description,
            },
            {
              property: 'og:image',
              content: workData.main_image
                ? environment.apiRoute + workData.main_image
                : noImage,
            },
            {
              property: 'og:site_name',
              content: "Elias Gutierrez's Portfolio",
            },
            {
              property: 'og:title',
              content:
                workData.meta.seo_title.length > 0
                  ? `${workData.meta.seo_title} - Work | Elias Gutierrez, Software Engineer & Full-Stack Web Developer`
                  : `${workData.title} - Work | Elias Gutierrez, Software Engineer & Full-Stack Web Developer`,
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
                workData.meta.search_description.length > 0
                  ? workData.meta.search_description
                  : workData.description,
            },
            {
              name: 'title',
              content:
                workData.meta.seo_title.length > 0
                  ? `${workData.meta.seo_title} - Work | Elias Gutierrez, Software Engineer & Full-Stack Web Developer`
                  : `${workData.title} - Work | Elias Gutierrez, Software Engineer & Full-Stack Web Developer`,
            },
          ]}
          title={
            workData.meta.seo_title.length > 0
              ? `${workData.meta.seo_title} - Work | Elias Gutierrez, Software Engineer & Full-Stack Web Developer`
              : `${workData.title} - Work | Elias Gutierrez, Software Engineer & Full-Stack Web Developer`
          }
          twitterMetaTags={[
            {
              property: 'twitter:card',
              content: 'summmary_large_image',
            },
            {
              property: 'twitter:creator',
              content: '@_BlackCubes_',
            },
            {
              property: 'twitter:description',
              content:
                workData.meta.search_description.length > 0
                  ? workData.meta.search_description
                  : workData.description,
            },
            {
              property: 'twitter:image',
              content: workData.main_image
                ? environment.apiRoute + workData.main_image
                : noImage,
            },
            {
              property: 'twitter:site',
              content: '@_BlackCubes_',
            },
            {
              property: 'twitter:title',
              content:
                workData.meta.seo_title.length > 0
                  ? `${workData.meta.seo_title} - Work | Elias Gutierrez, Software Engineer & Full-Stack Web Developer`
                  : `${workData.title} - Work | Elias Gutierrez, Software Engineer & Full-Stack Web Developer`,
            },
            {
              property: 'twitter:url',
              content: window.location.href,
            },
          ]}
        />
      )}

      <PageContainer>
        <WithLoadingOverlay
          contentComponent={
            workError ? (
              <NotFound />
            ) : (
              /* eslint-disable-next-line react/jsx-no-useless-fragment */
              <>{workData && <WorkDetail workData={workData} />}</>
            )
          }
          isLoading={isLoadingOverall(workFetching)}
          loaderComponent={<LoadingIcon />}
          loaderDuration={3000}
        />
      </PageContainer>
    </>
  );
};

export default WorkDetailView;
