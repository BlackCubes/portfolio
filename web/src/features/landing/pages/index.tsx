import React, { FC } from 'react';
import { motion } from 'framer-motion';

import { useGetArticlesQuery } from 'common/api/articleExtendedApi';
import { useGetWorksByCategoryQuery } from 'common/api/workExtendedApi';

import SEO from 'common/components/SEO';

import {
  ArticleSection,
  HeroBanner,
  TalkSection,
  WorkSection,
} from 'features/landing/components';

const LandingListView: FC = () => {
  const { data: articlesData } = useGetArticlesQuery({
    category: 0,
    limit: 3,
    tags: [],
  });

  const { selectedData: worksData } = useGetWorksByCategoryQuery(
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

  return (
    <motion.div exit={{ opacity: 0 }}>
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

      <HeroBanner />

      <WorkSection worksData={worksData} />

      <ArticleSection articlesData={articlesData?.items ?? []} />

      <TalkSection />
    </motion.div>
  );
};

export default LandingListView;
