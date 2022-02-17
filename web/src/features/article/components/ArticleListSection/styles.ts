import { Link } from 'react-router-dom';
import styled from 'styled-components';

// ARTICLE LIST SECTION
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

// ARTICLE LIST CONTAINER
export const ArticleContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ArticleImageWrapper = styled.div``;

export const ArticleImageLink = styled(Link)``;

export const ArticleDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArticleAdditionalInfo = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const ArticleCategory = styled.div``;

export const ArticleTags = styled.div``;

export const ArticleDate = styled.div``;

export const ArticleReadTime = styled.div``;

export const ArticleTitle = styled.div``;

export const ArticleTitleLink = styled(Link)``;

export const ArticleDescription = styled.div``;

export const ArticleLinkWrapper = styled.div``;

export const ArticleLink = styled(Link)`
  font-size: ${(props) => props.theme.fonts.paragraph};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary.hex};
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;
