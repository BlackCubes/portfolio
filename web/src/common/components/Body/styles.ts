import styled from 'styled-components';

export const BodyParagraph = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

  & h1 {
    font-size: ${({ theme }) => theme.fonts.headingPrimary};

    @media ${({ theme }) => theme.responsive.below899} {
      font-size: 3.3rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      font-size: 3rem;
    }

    @media ${({ theme }) => theme.responsive.below479} {
      font-size: 2.7rem;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      font-size: 2.5rem;
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

    @media ${({ theme }) => theme.responsive.below479} {
      font-size: 2.3rem;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      font-size: 2rem;
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

    @media ${({ theme }) => theme.responsive.below479} {
      font-size: 1.7rem;
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

    @media ${({ theme }) => theme.responsive.below479} {
      margin-left: 3rem;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      margin-left: 2.5rem;
    }
  }

  li {
    &:not(:first-child) {
      padding-top: 0.3rem;

      @media ${({ theme }) => theme.responsive.below379} {
        padding-top: 0.5rem;
      }
    }

    &:not(:last-child) {
      padding-bottom: 0.3rem;

      @media ${({ theme }) => theme.responsive.below379} {
        padding-bottom: 0.5rem;
      }
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

    @media ${({ theme }) => theme.responsive.below479} {
      font-size: 1.2rem;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      font-size: 1rem;
    }
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

    &:last-child {
      @media ${({ theme }) => theme.responsive.below379} {
        margin-bottom: 0;
      }
    }

    @media ${({ theme }) => theme.responsive.below899} {
      line-height: 1.8;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      margin-top: 1.75rem;
      margin-bottom: 1.75rem;
    }

    @media ${({ theme }) => theme.responsive.below479} {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      line-height: 1.5;
    }
  }

  @media ${({ theme }) => theme.responsive.below479} {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const BodyImageCaption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

  @media ${({ theme }) => theme.responsive.below479} {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const ImageCaptionImgWrapper = styled.div`
  @media ${({ theme }) => theme.responsive.below379} {
    width: 104%;
  }
`;

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

  @media ${({ theme }) => theme.responsive.below379} {
    font-size: 1.2rem;
    width: 100%;
  }
`;

export const BodyBlockQuote = styled.blockquote`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: -1.4rem;

  @media ${({ theme }) => theme.responsive.below379} {
    margin-top: 1.5rem;
  }
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

  @media ${({ theme }) => theme.responsive.below479} {
    font-size: 4rem;
    transform: translateY(-0.8rem);
  }

  @media ${({ theme }) => theme.responsive.below379} {
    font-size: 3rem;
    transform: translateY(-0.4rem);
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

    @media ${({ theme }) => theme.responsive.below479} {
      font-size: 1.65rem;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      font-size: 1.55rem;
    }
  }

  @media ${({ theme }) => theme.responsive.below379} {
    margin-left: 0.3rem;
  }
`;

export const BodyCode = styled.div`
  font-size: 1.3rem;
  width: 100%;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  overflow-x: auto;

  @media ${({ theme }) => theme.responsive.below479} {
    font-size: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    font-size: 1.1rem;
    width: 106%;
    transform: translateX(-0.6rem);
  }
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

  @media ${({ theme }) => theme.responsive.below479} {
    margin: 2rem auto;
    transform: scale(1.1);
  }

  @media ${({ theme }) => theme.responsive.below379} {
    transform: scale(1);
  }
`;
