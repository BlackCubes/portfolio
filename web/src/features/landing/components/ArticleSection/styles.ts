import { Link } from 'react-router-dom';
import styled from 'styled-components';

// ARTICLE SECTION
export const Section = styled.section``;

export const SectionTitle = styled.div`
  border-left: ${({ theme }) =>
    `0.1rem dotted rgba(${theme.colors.primary.rgb}, 0.7)`};
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

export const Introduction = styled.div`
  text-align: center;
  padding: 5rem 15rem;

  @media ${({ theme }) => theme.responsive.below899} {
    padding: 5rem 8rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    padding: 5rem 5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding: 5rem 1rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    padding: 4rem 1rem;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'article1 article1'
    'article2 article3';
  margin-bottom: 10rem;

  @media ${({ theme }) => theme.responsive.below899} {
    margin-bottom: 0;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    display: flex;
    flex-direction: column;
  }
`;

export const ExploreMoreWrapper = styled.div`
  margin-top: 10rem;
  text-align: center;

  @media ${({ theme }) => theme.responsive.below599} {
    margin-top: 6rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    margin-top: 5rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    margin-top: 3rem;
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

// ARTICLE CONTAINER
export const ArticleContainerStyle = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;

  &.article1 {
    position: relative;
    grid-area: article1;
  }

  &.article2 {
    position: relative;
    grid-area: article2;
    padding-left: 15rem;

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 36rem;
      height: 0.2rem;
      background-color: ${({ theme }) =>
        `rgba(${theme.colors.primary.rgb}, 0.5)`};

      @media ${({ theme }) => theme.responsive.below899} {
        content: none;
      }
    }

    &:before {
      top: -4.7rem;
      left: 24.1rem;
      transform: rotate(40deg);

      @media ${({ theme }) => theme.responsive.below1199} {
        left: 5.7rem;
      }
    }

    &:after {
      bottom: 5.4rem;
      left: 38rem;
      transform: rotate(90deg);

      @media ${({ theme }) => theme.responsive.below1199} {
        left: 19.5rem;
      }
    }

    @media ${({ theme }) => theme.responsive.below899} {
      padding-left: 3rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      padding-top: 2rem;
      padding-bottom: 2rem;
      padding-left: 2rem;
    }

    @media ${({ theme }) => theme.responsive.below479} {
      padding-bottom: 3rem;
      padding-left: 0;
    }
  }

  &.article3 {
    position: relative;
    grid-area: article3;
    padding-right: 15rem;

    &:before {
      content: '';
      position: absolute;
      top: -4.7rem;
      right: 24.1rem;
      width: 36rem;
      height: 0.2rem;
      background-color: ${({ theme }) =>
        `rgba(${theme.colors.primary.rgb}, 0.5)`};
      transform: rotate(-40deg);

      @media ${({ theme }) => theme.responsive.below1199} {
        right: 5.7rem;
      }

      @media ${({ theme }) => theme.responsive.below899} {
        content: none;
      }
    }

    @media ${({ theme }) => theme.responsive.below899} {
      padding-right: 3rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      padding-top: 2rem;
      padding-right: 2rem;
      padding-bottom: 2rem;
    }

    @media ${({ theme }) => theme.responsive.below479} {
      padding-right: 0;
      padding-bottom: 3rem;
    }
  }

  @media ${({ theme }) => theme.responsive.below599} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding-bottom: 3rem;
  }
`;

export const ArticleDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArticleImageWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const ArticleTitleLink = styled(Link)`
  text-decoration: none;
`;
