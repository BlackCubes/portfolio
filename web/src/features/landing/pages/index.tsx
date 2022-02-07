import React, { FC } from 'react';

import {
  ArticleSection,
  HeroBanner,
  TalkSection,
  WorkSection,
} from 'features/landing/components';

const LandingPage: FC = () => (
  <>
    <HeroBanner />

    <WorkSection />

    <ArticleSection />

    <TalkSection />
  </>
);

export default LandingPage;
