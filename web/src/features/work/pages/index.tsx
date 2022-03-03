import React, { FC } from 'react';

import SEO from 'common/components/SEO';

import { PortfolioSection, WorkSection } from 'features/work/components';

const WorkListView: FC = () => (
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

    <WorkSection />

    <PortfolioSection />
  </>
);

export default WorkListView;
