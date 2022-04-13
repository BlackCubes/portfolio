import styled from 'styled-components';

/* eslint-disable-next-line import/prefer-default-export */
export const LoaderComponentWrapper = styled.div`
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
