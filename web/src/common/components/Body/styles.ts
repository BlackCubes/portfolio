import styled from 'styled-components';

export const BodyParagraph = styled.div`
  & h1 {
    font-size: ${({ theme }) => theme.fonts.headingPrimary};

    @media ${({ theme }) => theme.responsive.below899} {
      font-size: 3.3rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      font-size: 3rem;
    }
  }

  & h2 {
    font-size: ${({ theme }) => theme.fonts.headingSecondary};

    @media ${({ theme }) => theme.responsive.below899} {
      font-size: 2.7rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      font-size: 2.5rem;
    }
  }

  & h3 {
    font-size: ${({ theme }) => theme.fonts.headingTertiary};

    @media ${({ theme }) => theme.responsive.below899} {
      font-size: 2.3rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      font-size: 2rem;
    }
  }

  & h4 {
    font-size: 2rem;

    @media ${({ theme }) => theme.responsive.below899} {
      font-size: 1.7rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      font-size: 1.65rem;
    }
  }

  & h5 {
    font-size: 1.5rem;

    @media ${({ theme }) => theme.responsive.below899} {
      font-size: 1.45rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      font-size: 1.4rem;
    }
  }

  & h6 {
    font-size: 1.2rem;
  }

  & ul {
    list-style: none;
  }

  & ol {
    margin-left: 4rem;
  }

  li {
    &:not(:first-child) {
      padding-top: 0.3rem;
    }

    &:not(:last-child) {
      padding-bottom: 0.3rem;
    }
  }

  & code {
    margin: 0;
    padding: 0.2rem 0.7rem;
    border-left: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0.17)`};
    border-top: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0.17)`};
    border-right: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassDarkShadow.rgb}, 0.27)`};
    border-bottom: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassDarkShadow.rgb}, 0.27)`};
    border-radius: 2rem;
  }

  & a {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.hex};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
      opacity: 0.9;
    }
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.hex};
  }

  & p,
  & ul,
  & ol {
    font-size: ${({ theme }) => theme.fonts.paragraph};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondary.hex};

    @media ${({ theme }) => theme.responsive.below899} {
      font-size: 1.55rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      font-size: 1.5rem;
    }
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6,
  & p,
  & ul,
  & ol {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    line-height: 1.5;

    @media ${({ theme }) => theme.responsive.below899} {
      line-height: 1.8;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      margin-top: 1.75rem;
      margin-bottom: 1.75rem;
    }
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
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.6rem;
  text-align: center;

  @media ${({ theme }) => theme.responsive.below599} {
    width: 90%;
  }
`;

export const BodyBlockQuote = styled.blockquote`
  display: flex;
  margin-bottom: -1.4rem;
`;

export const BlockQuoteQuotation = styled.span`
  font-size: 6rem;
  font-style: italic;
  color: ${({ theme }) => `rgba(${theme.colors.glassDarkShadow.rgb}, 0.9)`};
  transform: translateY(-1.4rem);

  @media ${({ theme }) => theme.responsive.below899} {
    font-size: 5rem;
    transform: translateY(-1.1rem);
  }

  @media ${({ theme }) => theme.responsive.below599} {
    font-size: 4.5rem;
    transform: translateY(-1rem);
  }
`;

export const BlockQuoteContent = styled.div`
  margin-left: 0.7rem;

  & p {
    font-size: 1.8rem;
    font-style: italic;
    color: ${({ theme }) => `rgba(${theme.colors.secondary.rgb}, 0.75)`};
    line-height: 1.5;

    @media ${({ theme }) => theme.responsive.below899} {
      font-size: 1.75rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      font-size: 1.7rem;
    }
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
  border-left: ${({ theme }) =>
    `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0.17)`};
  border-top: ${({ theme }) =>
    `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0.17)`};
  border-right: ${({ theme }) =>
    `0.1rem solid rgba(${theme.colors.glassDarkShadow.rgb}, 0.27)`};
  border-bottom: ${({ theme }) =>
    `0.1rem solid rgba(${theme.colors.glassDarkShadow.rgb}, 0.27)`};
  border-radius: 2rem;
`;

export const BodyEquation = styled.div`
  margin: 2.5rem auto;
  transform: scale(1.35);

  @media ${({ theme }) => theme.responsive.below599} {
    transform: scale(1.2);
  }
`;
