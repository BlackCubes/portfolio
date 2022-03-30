import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    /* Defines what 1rem is: 1rem = 10px (10/16 = 62.5%) */
    font-size: 62.5%;

    @media ${({ theme }) => theme.responsive.below1199} {
      /* 1rem = 11px (11/16 = 68.75%) */
      font-size: 68.75%;
    }

    @media ${({ theme }) => theme.responsive.below899} {
      /* 1rem = 12px (12/16 = 75%) */
      font-size: 75%;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      /* 1rem = 13px (13/16 = 81.25%) */
      font-size: 81.25%;
    }
    
    @media ${({ theme }) => theme.responsive.below479} {
      /* 1rem = 14px (14/16 = 87.5%) */
      font-size: 87.5%;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      /* 1rem = 15px (15/16 = 93.75%) */
      font-size: 93.75%;
    }
  }

  html,
  body {
    min-height: 100vh;
    
    /* CUSTOM SCROLLBAR */
    /* --FOR FIREFOX */
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) =>
      `rgba(${theme.colors.glass.rgb}, 1) rgba(${theme.colors.glass.rgb}, 0.27)`};

    /* --FOR NON-FIREFOX */
    &::-webkit-scrollbar {
      width: 1.05rem;
    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => `rgba(${theme.colors.glass.rgb}, 1)`};
      border-radius: 10rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) =>
        `rgba(${theme.colors.glass.rgb}, 0.17)`};
      border-radius: 10rem;
      box-shadow: ${({ theme }) =>
        `-0.3rem -0.3rem 0.4rem 0 rgba(${theme.colors.glassLightShadow.rgb}, 0.3),
        0.3rem 0.3rem 0.4rem 0 rgba(${theme.colors.glassDarkShadow.rgb}, 0.47)`};
    }
  }

  body {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    font-family: 'Nunito', 'Open Sans', 'Poppins', 'Roboto', sans-serif;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.body.hex};
    transition: all 0.25s linear;
  }

  #root {
    @media ${({ theme }) => theme.responsive.below599} {
      /* FOR STICKY/FIXED POSITION NAVBAR */
      margin-top: 5rem;
    }
  
    @media ${({ theme }) => theme.responsive.below379} {
      margin-top: 4rem;
    }
  }

  .default-container {
    max-width: 112rem;
    margin-left: auto;
    margin-right: auto;

    @media ${({ theme }) => theme.responsive.below1199} {
      max-width: 75rem;
    }

    @media ${({ theme }) => theme.responsive.below899} {
      max-width: 95%;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      max-width: 93%;
    }
  }

  .non-default-container {
    max-width: 100%;
  }

  .default-margin-bottom {
    margin-bottom: 15rem;

    @media ${({ theme }) => theme.responsive.below599} {
      margin-bottom: 12rem;
    }

    @media ${({ theme }) => theme.responsive.below479} {
      margin-bottom: 10rem;
    }
  }

  .navbar-footer-space {
    margin-top: 10rem;

    @media ${({ theme }) => theme.responsive.below599} {
      margin-top: 5rem;
    }
  }

  &::selection {
    color: ${({ theme }) => theme.colors.white.hex};
    background-color: ${({ theme }) => theme.colors.secondary.hex};
  }
`;

export default GlobalStyle;
