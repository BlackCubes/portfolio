import React, { FC } from 'react';

import { PageContainerStyle } from './styles';

export interface IPageContainer {
  className?: string;
  isFirstMount: boolean;
}

const PageContainer: FC<IPageContainer> = ({
  children,
  className = '',
  isFirstMount,
}) => (
  <PageContainerStyle
    className={className}
    variants={{
      animate: {
        opacity: 1,
        x: 0,
      },
      exit: {
        opacity: 0,
        x: '-100%',
        transition: { duration: 0.3 },
      },
      initial: {
        opacity: isFirstMount ? 1 : 0,
        x: 0,
      },
    }}
  >
    {children}
  </PageContainerStyle>
);

export default PageContainer;
