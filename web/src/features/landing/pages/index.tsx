import React, { FC } from 'react';

import {
  ArticleSection,
  HeroBanner,
  TalkSection,
  WorkSection,
} from 'features/landing/components';

const LandingPage: FC = () => (
  <>
    <ArticleSection />

    <HeroBanner />

    <TalkSection />

    <WorkSection />
  </>
);

export default LandingPage;
