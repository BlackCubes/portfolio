import React, { FC } from 'react';

import { PortfolioSection, WorkSection } from 'features/work/components';

const WorkListView: FC = () => (
  <>
    <WorkSection />

    <PortfolioSection />
  </>
);

export default WorkListView;
