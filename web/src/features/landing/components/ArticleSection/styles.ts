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

export const Display = styled.div``;

export const ExploreMoreWrapper = styled.div`
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
  margin-top: 9rem;
  margin-bottom: 9rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const ArticleDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArticleImageWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const ArticleTitleLink = styled.a`
  text-decoration: none;
`;
