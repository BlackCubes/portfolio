import { ReactNode } from 'react';

interface ILoadingOverlay {
  children: ReactNode;
  isLoading: boolean;
  loaderComponent: JSX.Element | JSX.Element[];
}

const LoadingOverlay = ({
  children,
  isLoading,
  loaderComponent,
}: ILoadingOverlay): ReactNode => (isLoading ? loaderComponent : children);

export default LoadingOverlay;
