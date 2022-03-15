import { Link } from 'react-router-dom';
import styled from 'styled-components';

// ARTICLE SECTION
export const Section = styled.section``;

export const SectionTitle = styled.div`
  border-left: ${(props) =>
    `0.1rem dotted rgba(${props.theme.colors.primary.rgb}, 0.7)`};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;

  @media ${({ theme }) => theme.responsive.below1199} {
    padding-top: 3rem;
  }
`;

export const Introduction = styled.div`
  text-align: center;
  padding: 5rem 15rem;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'article1 article1'
    'article2 article3';
  margin-bottom: 10rem;
`;

export const ExploreMoreWrapper = styled.div`
  margin-top: 10rem;
  text-align: center;
`;

export const ExploreMoreLink = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary.hex};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    opacity: 0.9;
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
      background-color: ${(props) =>
        `rgba(${props.theme.colors.primary.rgb}, 0.5)`};
    }

    &:before {
      top: -4.7rem;
      left: 24.1rem;
      transform: rotate(40deg);

      @media ${({ theme }) => theme.responsive.below1199} {
        left: 13.1rem;
      }
    }

    &:after {
      bottom: 5.4rem;
      left: 38rem;
      transform: rotate(90deg);

      @media ${({ theme }) => theme.responsive.below1199} {
        left: 27rem;
      }
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
      background-color: ${(props) =>
        `rgba(${props.theme.colors.primary.rgb}, 0.5)`};
      transform: rotate(-40deg);

      @media ${({ theme }) => theme.responsive.below1199} {
        right: 13.1rem;
      }
    }
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
