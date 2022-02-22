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

// ARITCLE BODY
export const BodyParagraph = styled.div`
  & h1 {
    font-size: ${(props) => props.theme.fonts.headingPrimary};
  }

  & h2 {
    font-size: ${(props) => props.theme.fonts.headingSecondary};
  }

  & h3 {
    font-size: ${(props) => props.theme.fonts.headingTertiary};
  }

  & h1,
  & h2,
  & h3 {
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary.hex};
  }

  & p {
    font-size: ${(props) => props.theme.fonts.paragraph};
    font-weight: 400;
    color: ${(props) => props.theme.colors.secondary.hex};
  }

  & h1,
  & h2,
  & h3,
  & p {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    line-height: 1.5;
  }
`;

export const BodyImageCaption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;

export const ImageCaptionImgWrapper = styled.div``;

export const ImageCaptionContent = styled.span`
  font-size: 1.3rem;
  padding-top: 0.6rem;
`;

export const BodyBlockQuote = styled.blockquote`
  text-align: center;
`;

export const BodyCode = styled.pre`
  width: 100%;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  padding: 2rem 2.5rem;
  overflow-x: auto;
`;

export const CodeContent = styled.code`
  font-size: 1.15rem;
`;

export const BodyEquation = styled.div`
  margin: 2.5rem auto;
  transform: scale(1.35);
`;
