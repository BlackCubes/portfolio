import { Link } from 'react-router-dom';
import styled from 'styled-components';

// WORK SECTION
export const Section = styled.section``;

export const SectionTitle = styled.div`
  text-align: right;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;

  @media ${({ theme }) => theme.responsive.below1199} {
    padding-top: 2.5rem;
  }

  @media ${({ theme }) => theme.responsive.below899} {
    padding-top: 2.3rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding-top: 1rem;
  }
`;

export const ExploreMoreWrapper = styled.div`
  margin-top: 5rem;
  text-align: center;

  @media ${({ theme }) => theme.responsive.below599} {
    margin-top: 2rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    margin-top: 1rem;
  }
`;

export const ExploreMoreLink = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.hex};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    opacity: 0.9;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    font-size: 1.7rem;
  }
`;

// WORK CONTAINER
export const WorkContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 9rem;
  margin-bottom: 9rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  &.reverse {
    flex-direction: row-reverse;

    @media ${({ theme }) => theme.responsive.below899} {
      flex-direction: column-reverse;
    }
  }

  @media ${({ theme }) => theme.responsive.below899} {
    flex-direction: column;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const WorkTitle = styled.div`
  width: 35%;

  &.reverse {
    text-align: right;

    @media ${({ theme }) => theme.responsive.below899} {
      text-align: center;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      text-align: left;
    }
  }

  @media ${({ theme }) => theme.responsive.below899} {
    width: 100%;
    padding: 1rem 4.5rem;
    text-align: center;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding: 1rem 1rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    text-align: left;
  }
`;

export const WorkDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 4.5rem;

  @media ${({ theme }) => theme.responsive.below899} {
    padding: 1rem 4.5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding: 1rem 1rem;
  }
`;

export const WorkDescription = styled.div`
  margin-bottom: 2rem;

  &.reverse {
    text-align: right;

    @media ${({ theme }) => theme.responsive.below899} {
      text-align: center;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      margin-bottom: 1rem;
      text-align: left;
    }
  }

  @media ${({ theme }) => theme.responsive.below899} {
    text-align: center;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    text-align: left;
  }
`;

export const WorkLinkWrapper = styled.div`
  text-align: right;

  &.reverse {
    text-align: left;

    @media ${({ theme }) => theme.responsive.below899} {
      text-align: center;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      order: -1;
      margin-bottom: 2rem;
      text-align: right;
    }
  }

  @media ${({ theme }) => theme.responsive.below899} {
    padding: 1rem 4.5rem;
    text-align: center;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding: 0rem 1rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    text-align: right;
  }
`;

export const WorkLink = styled(Link)`
  font-size: ${({ theme }) => theme.fonts.paragraph};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.hex};
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

export const WorkImageWrapper = styled.div`
  width: 18%;
  margin-left: 3rem;

  &.reverse {
    margin-left: 0;
    margin-right: 3rem;

    @media ${({ theme }) => theme.responsive.below899} {
      margin-right: 0;
    }
  }

  @media ${({ theme }) => theme.responsive.below899} {
    width: 100%;
    margin-left: 0;
    padding: 1rem 4.5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding: 1rem 1rem;
  }
`;
