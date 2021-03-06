import { FC } from 'react';

import { PageContainerStyle } from './styles';

export interface IPageContainer {
  children: React.ReactNode;
  extraClassName?: string;
  isFirstMount?: boolean;
}

const PageContainer: FC<IPageContainer> = ({
  children,
  extraClassName = '',
  isFirstMount,
}) => (
  <PageContainerStyle
    className={`default-container navbar-footer-space ${extraClassName}`}
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
