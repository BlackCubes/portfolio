import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.responsive.below899} {
    flex-direction: column-reverse;
  }
`;

export const ProfileImageWrapper = styled.div`
  width: 15rem;

  & img {
    width: 105%;
  }

  @media ${({ theme }) => theme.responsive.below899} {
    align-self: end;
    width: 13rem;
    margin-top: 5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    margin-top: 3rem;
  }
`;

export const BiographyContainer = styled.div`
  width: 80%;
  text-align: right;

  @media ${({ theme }) => theme.responsive.below899} {
    width: 100%;
  }
`;

export const MainBiographyWrapper = styled.div`
  margin-bottom: 3rem;

  @media ${({ theme }) => theme.responsive.below899} {
    margin-bottom: 5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    margin-bottom: 3rem;
  }
`;

export const SecondaryBiographyWrapper = styled.div``;
