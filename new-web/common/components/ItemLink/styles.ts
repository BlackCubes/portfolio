import styled from 'styled-components';

export const ItemLinkStyle = styled.a`
  display: inline-flex;
  align-items: end;
  height: inherit;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary.hex};
  padding: 0.7rem;
  text-decoration: none;
  transition: all 0.05s linear;

  &:hover,
  &.active {
    color: ${({ theme }) => `rgba(${theme.colors.secondary.rgb}, 0.6)`};
    font-size: 1.89rem;
    letter-spacing: 0.05rem;
    border-top: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0.17)`};
    border-right: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassDarkShadow.rgb}, 0.27)`};
    border-bottom: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassDarkShadow.rgb}, 0.27)`};
    border-left: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0.17)`};
    border-radius: 1rem;

    @media ${({ theme }) => theme.responsive.below899} {
      font-size: 1.79rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      font-size: 1.59rem;
    }

    @media ${({ theme }) => theme.responsive.below479} {
      font-size: 1.49rem;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      font-size: 1.39rem;
    }
  }

  @media ${({ theme }) => theme.responsive.below899} {
    font-size: 1.9rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    display: block;
    font-size: 1.7rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    font-size: 1.6rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    font-size: 1.5rem;
  }
`;
