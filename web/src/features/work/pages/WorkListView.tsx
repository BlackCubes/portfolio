import React, { FC } from 'react';

import { useGetWorksByCategoryQuery } from 'common/api/workExtendedApi';

import SEO from 'common/components/SEO';

import { PersonalSection, WorkSection } from 'features/work/components';

const WorkListView: FC = () => {
  const { data: worksData } = useGetWorksByCategoryQuery({
    category: 'Work',
    limit: 4,
  });
  const { data: personalsData } = useGetWorksByCategoryQuery({
    category: 'Personal',
    limit: 4,
  });

  return (
    <>
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

      <WorkSection worksData={worksData?.items ?? []} />

      <PersonalSection personalsData={personalsData?.items ?? []} />
    </>
  );
};

export default WorkListView;