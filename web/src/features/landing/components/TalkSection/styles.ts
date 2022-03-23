import styled from 'styled-components';

// TALK SECTION
export const Section = styled.section``;

export const SectionTitle = styled.div`
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  padding-top: 4rem;

  @media ${({ theme }) => theme.responsive.below899} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding-top: 1rem;
  }
`;

// TALK CONTAINER
export const TalkContainerStyle = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;

  @media ${({ theme }) => theme.responsive.below899} {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding-bottom: 1rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    padding-top: 3rem;
  }
`;

export const TalkDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &.reverse {
    flex-direction: column-reverse;
    padding-top: 10rem;

    @media ${({ theme }) => theme.responsive.below899} {
      padding-top: 0;
    }
  }
`;

export const TalkImageWrapper = styled.div`
  margin-bottom: 2rem;

  &.reverse {
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

export const TalkTitleLink = styled.a`
  padding-left: 7rem;
  padding-right: 7rem;
  text-decoration: none;

  @media ${({ theme }) => theme.responsive.below599} {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
