import { Link } from 'react-router-dom';
import styled from 'styled-components';

// ARTICLE LIST
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
    padding-top: 2.5rem;
  }
`;

// ARTICLE LIST CONTAINER
export const ArticleContainerStyle = styled.div`
  display: flex;
  width: 90%;
  margin: 7rem auto;

  @media ${({ theme }) => theme.responsive.below1199} {
    width: 95%;
  }
`;

export const ArticleImageWrapper = styled.div``;

export const ArticleImageLink = styled(Link)``;

export const ArticleDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const ArticleAdditionalInfo = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const ArticleCategory = styled.div`
  position: relative;
  text-transform: uppercase;
  margin-right: 0.5rem;

  &.has-tags::after {
    content: '';
    position: absolute;
    top: 0.1rem;
    right: -0.3rem;
    display: block;
    height: 1.5rem;
    border-right: 0.1rem solid ${(props) => props.theme.colors.black.hex};
  }

  & p {
    font-size: 1.3rem;
    letter-spacing: 0.06rem;
  }
`;

export const ArticleTags = styled.div`
  display: flex;
  font-style: italic;
  text-transform: lowercase;
  margin-left: 0.1rem;

  & p {
    position: relative;
    font-size: 1.3rem;

    &:not(:last-child) {
      margin-right: 0.7rem;
    }

    &:not(:last-child)::after {
      content: '\\2013';
      position: absolute;
    }
  }
`;

export const ArticleDate = styled.div`
  margin-right: 3rem;

  & p {
    font-size: 1.3rem;
  }
`;

export const ArticleReadTime = styled.div`
  & p {
    font-size: 1.3rem;
    font-weight: 700;
    color: ${(props) => `rgba(${props.theme.colors.secondary.rgb}, 0.9)`};
  }
`;

export const ArticleTitle = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const ArticleTitleLink = styled(Link)`
  text-decoration: none;
`;

export const ArticleDescription = styled.div``;

export const ArticleLinkWrapper = styled.div`
  margin-top: 1.5rem;
`;

export const ArticleLink = styled(Link)`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary.hex};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 0.7;
  }
`;
