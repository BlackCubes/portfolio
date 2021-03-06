import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  text-align: right;
`;

export const MainAboutWrapper = styled.div`
  width: 80%;
  margin-bottom: 3rem;
  margin-left: auto;

  @media ${({ theme }) => theme.responsive.below1199} {
    width: 97%;
  }

  @media ${({ theme }) => theme.responsive.below899} {
    width: 100%;
    margin-bottom: 5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    margin-bottom: 3rem;
  }
`;

export const SecondaryAboutWrapper = styled.div`
  width: 95%;
  margin-bottom: 3rem;
  margin-left: auto;

  @media ${({ theme }) => theme.responsive.below1199} {
    width: 97%;
  }

  @media ${({ theme }) => theme.responsive.below899} {
    width: 100%;
    margin-bottom: 5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    margin-bottom: 3rem;
  }
`;
