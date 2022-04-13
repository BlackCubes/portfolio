import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

const LoaderHeightStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: -30rem;
  margin-bottom: -15rem;

  @media ${({ theme }) => theme.responsive.below1199} {
    margin-top: -20rem;
  }

  @media ${({ theme }) => theme.responsive.below899} {
    margin-top: -10rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    margin-top: 0;
    margin-bottom: -10rem;
  }

  @media ${({ theme }) => theme.responsive.between991And600} {
    margin-top: -20rem;
  }
`;

interface ILoadingOverlay {
  contentComponent: JSX.Element | JSX.Element[];
  isLoading: boolean;
  loaderComponent: JSX.Element | JSX.Element[];
}

const LoadingOverlay: FC<ILoadingOverlay> = ({
  contentComponent,
  isLoading,
  loaderComponent,
}) => {
  const [isLoadingFinal, setIsLoadingFinal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingFinal(isLoading);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return isLoadingFinal ? (
    <LoaderHeightStyled>{loaderComponent}</LoaderHeightStyled>
  ) : (
    /* eslint-disable-next-line react/jsx-no-useless-fragment */
    <>{contentComponent}</>
  );
};

export default LoadingOverlay;
