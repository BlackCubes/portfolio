import styled from 'styled-components';

export const DarkModeWrapper = styled.div`
  margin-top: 2rem;
  text-align: right;
  transition: all 0.25s linear;

  @media ${({ theme }) => theme.responsive.below599},
    ${({ theme }) => theme.responsive.between991And600} {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    margin-top: 0;
    background-color: ${({ theme }) =>
      !theme.isDarkTheme ? theme.colors.white.hex : theme.colors.black.hex};
    border-radius: 2rem;
    z-index: 99;
  }
`;

export const DarkModeButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  width: 6rem;
  height: 2.5rem;
  padding: 0.5rem 0.7rem;
  border: none;
  background-color: ${({ theme }) => `rgba(${theme.colors.glass.rgb}, 0.17)`};
  border-radius: 2rem;
  box-shadow: ${({ theme }) => `
    -0.3rem -0.3rem 0.4rem 0 rgba(${theme.colors.glassLightShadow.rgb}, 0.17),
    0.3rem 0.3rem 0.4rem 0 rgba(${theme.colors.glassDarkShadow.rgb}, 0.27)
  `};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    -webkit-tap-highlight-color: transparent;
    outline: none !important;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    width: 5rem;
    height: 2.2rem;
    padding: 0.3rem 0.4rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    width: 4.5rem;
    height: 2rem;
  }

  @media ${({ theme }) => theme.responsive.between991And600} {
    width: 6rem;
  }
`;

export const DarkModeCircle = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-color: ${({ theme }) => `
    rgba(${
      !theme.isDarkTheme ? theme.colors.black.rgb : theme.colors.white.rgb
    }, 0.55)
  `};
  border-radius: 50%;

  @media ${({ theme }) => theme.responsive.below599} {
    width: 1.4rem;
    height: 1.4rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    width: 1.2rem;
    height: 1.2rem;
  }
`;
