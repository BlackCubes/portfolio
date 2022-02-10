import React, { FC } from 'react';

import {
  ArticleSection,
  HeroBanner,
  TalkSection,
  WorkSection,
} from 'features/landing/components';

const LandingListView: FC = () => (
  <>
    <HeroBanner />

    <WorkSection />

    <ArticleSection />

    <TalkSection />
  </>
);

export default LandingListView;
