import styled from 'styled-components';

// TALK SECTION
export const Section = styled.section``;

export const SectionTitle = styled.div`
  position: relative;
  text-align: center;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 1rem;
    height: 6rem;
    border-left: ${({ theme }) =>
      `0.2rem dotted rgba(${theme.colors.primary.rgb}, 0.7)`};
    opacity: 0.4;

    @media ${({ theme }) => theme.responsive.below899} {
      width: 1rem;
      height: 6rem;
      border-left: ${({ theme }) =>
        `0.2rem dotted rgba(${theme.colors.primary.rgb}, 0.7)`};
      opacity: 0.7;
    }
  }

  &:before {
    bottom: -0.6rem;
    left: 109.5rem;
    transform: rotate(-45deg);

    @media ${({ theme }) => theme.responsive.below1199} {
      left: 72.5rem;
    }

    @media ${({ theme }) => theme.responsive.below899} {
      left: 68.2rem;
    }
  }

  &:after {
    left: -0.2rem;
  }
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
