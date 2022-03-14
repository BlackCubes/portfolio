import styled from 'styled-components';

export const Article = styled.article`
  max-width: 75rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
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

  &::after {
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

export const ArticleTitle = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const ArticleAuthor = styled.div``;

export const AuthorTwitterContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const AuthorTwitterIconWrapper = styled.div`
  width: 1rem;
  margin-right: 0.2rem;
`;

export const AuthorTwitterIcon = styled.img`
  width: 100%;
`;

export const AuthorTwitterLink = styled.a`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.secondary.hex};
  text-decoration: none;
`;

export const ArticleDate = styled.div`
  margin-right: 1.5rem;

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

export const ArticleDescription = styled.div`
  max-width: 54rem;
  margin-top: 4rem;
  margin-bottom: 4rem;

  & p {
    font-size: 1.8rem;
    line-height: 1.55;
  }
`;

export const ArticleHeaderImage = styled.div`
  display: flex;
  justify-content: center;
`;

export const ArticleBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
`;
