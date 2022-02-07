import styled from 'styled-components';

// Article Section
export const Section = styled.section``;

export const SectionTitle = styled.div`
  border-left: ${(props) =>
    `0.1rem dotted rgba(${props.theme.colors.primary.rgb}, 0.7)`};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
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

export const ExploreMoreLink = styled.a`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    opacity: 0.9;
  }
`;

// Article Container
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

    &:before {
      content: '';
      position: absolute;
      top: -4.7rem;
      left: 24.1rem;
      width: 36rem;
      height: 0.2rem;
      background-color: ${(props) =>
        `rgba(${props.theme.colors.primary.rgb}, 0.5)`};
      transform: rotate(40deg);
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 5.4rem;
      left: 38rem;
      width: 36rem;
      height: 0.2rem;
      background-color: ${(props) =>
        `rgba(${props.theme.colors.primary.rgb}, 0.5)`};
      transform: rotate(90deg);
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

export const ArticleTitleLink = styled.a`
  text-decoration: none;
`;
