import styled from 'styled-components';

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

  & h4 {
    font-size: 2rem;
  }

  & h5 {
    font-size: 1.5rem;
  }

  & h6 {
    font-size: 1.2rem;
  }

  & ul {
    list-style: none;

    & li {
      &:not(:first-child) {
        padding-top: 0.3rem;
      }

      &:not(:last-child) {
        padding-bottom: 0.3rem;
      }
    }
  }

  & code {
    margin: 0;
    padding: 0.2rem 0.7rem;
    border-left: ${(props) =>
      `0.1rem solid rgba(${props.theme.colors.glassLightShadow.rgb}, 0.17)`};
    border-top: ${(props) =>
      `0.1rem solid rgba(${props.theme.colors.glassLightShadow.rgb}, 0.17)`};
    border-right: ${(props) =>
      `0.1rem solid rgba(${props.theme.colors.glassDarkShadow.rgb}, 0.27)`};
    border-bottom: ${(props) =>
      `0.1rem solid rgba(${props.theme.colors.glassDarkShadow.rgb}, 0.27)`};
    border-radius: 2rem;
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary.hex};
  }

  & p,
  & ul {
    font-size: ${(props) => props.theme.fonts.paragraph};
    font-weight: 400;
    color: ${(props) => props.theme.colors.secondary.hex};
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6,
  & p,
  & ul {
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
  display: flex;
  margin-bottom: -1.4rem;
`;

export const BlockQuoteQuotation = styled.span`
  font-size: 6rem;
  font-style: italic;
  color: ${(props) => `rgba(${props.theme.colors.glassDarkShadow.rgb}, 0.9)`};
  transform: translateY(-1.4rem);
`;

export const BlockQuoteContent = styled.div`
  margin-left: 0.7rem;

  & p {
    font-size: 1.8rem;
    font-style: italic;
    color: ${(props) => `rgba(${props.theme.colors.secondary.rgb}, 0.75)`};
    line-height: 1.5;
  }
`;

export const BodyCode = styled.div`
  width: 100%;
  font-size: 1.3rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  overflow-x: auto;
`;

export const CodePreTag = styled.pre`
  border-left: ${(props) =>
    `0.1rem solid rgba(${props.theme.colors.glassLightShadow.rgb}, 0.17)`};
  border-top: ${(props) =>
    `0.1rem solid rgba(${props.theme.colors.glassLightShadow.rgb}, 0.17)`};
  border-right: ${(props) =>
    `0.1rem solid rgba(${props.theme.colors.glassDarkShadow.rgb}, 0.27)`};
  border-bottom: ${(props) =>
    `0.1rem solid rgba(${props.theme.colors.glassDarkShadow.rgb}, 0.27)`};
  border-radius: 2rem;
`;

export const BodyEquation = styled.div`
  margin: 2.5rem auto;
  transform: scale(1.35);
`;
