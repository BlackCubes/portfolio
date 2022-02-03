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

    @media ${(props) => props.theme.responsive.below1199} {
      /* 1rem = 11px (11/16 = 68.75%) */
      font-size: 68.75%;
    }

    @media ${(props) => props.theme.responsive.below899} {
      /* 1rem = 12px (12/16 = 75%) */
      font-size: 75%;
    }

    @media ${(props) => props.theme.responsive.below599} {
      /* 1rem = 13px (13/16 = 81.25%) */
      font-size: 81.25%;
    }
    
    @media ${(props) => props.theme.responsive.below479} {
      /* 1rem = 14px (14/16 = 87.5%) */
      font-size: 87.5%;
    }

    @media ${(props) => props.theme.responsive.below379} {
      /* 1rem = 15px (15/16 = 93.75%) */
      font-size: 93.75%;
    }
  }

  html,
  body {
    width: 100vw;
    min-height: 100vh;
  }

  body {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    font-family: 'Nunito', 'Open Sans', 'Poppins', 'Roboto', sans-serif;
    font-weight: 400;
  }
`;

export default GlobalStyle;