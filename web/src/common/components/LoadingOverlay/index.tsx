import React, { FC, useEffect, useState } from 'react';

import { LoaderComponentWrapper } from './styles';

interface ILoadingOverlay {
  contentComponent: JSX.Element | JSX.Element[];
  isLoading: boolean;
  loaderComponent: JSX.Element | JSX.Element[];
  loaderDuration: number;
}

const LoadingOverlay: FC<ILoadingOverlay> = ({
  contentComponent,
  isLoading,
  loaderComponent,
  loaderDuration,
}) => {
  const [isLoadingFinal, setIsLoadingFinal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingFinal(isLoading);
    }, loaderDuration);

    return () => clearTimeout(timer);
  }, [isLoading, loaderDuration]);

  return isLoadingFinal ? (
    <LoaderComponentWrapper>{loaderComponent}</LoaderComponentWrapper>
  ) : (
    /* eslint-disable-next-line react/jsx-no-useless-fragment */
    <>{contentComponent}</>
  );
};

export default LoadingOverlay;
