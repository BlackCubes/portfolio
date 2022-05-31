import { DefaultTheme } from 'styled-components';

const theme: Required<DefaultTheme> = {
  colors: {
    black: {
      hex: '#000',
      rgb: '0,0,0',
    },
    body: {
      hex: '#fff',
      rgb: '255,255,255',
    },
    white: {
      hex: '#fff',
      rgb: '255,255,255',
    },
    primary: {
      hex: '#000811',
      rgb: '0,8,17',
    },
    secondary: {
      hex: '#001936',
      rgb: '0,25,54',
    },
    glass: {
      hex: '#E6EDFF',
      rgb: '230,237,255',
    },
    glassLightShadow: {
      hex: '#87A9FF',
      rgb: '135,169,255',
    },
    glassDarkShadow: {
      hex: '#255DEB',
      rgb: '37,93,235',
    },
  },
  fonts: {
    // FOR THIS WEB APP: let 1rem = 10px.
    // 3.5rem = 3.5px
    headingPrimary: '3.5rem',
    // 3rem = 30px
    headingSecondary: '3rem',
    // 2.5rem = 25px
    headingTertiary: '2.5rem',
    // 1.6rem = 16px
    paragraph: '1.6rem',
  },
  isDarkTheme: false,
  responsive: {
    // MEDIA QUERY MANAGER
    /**
     * DESKTOP-FIRST
     *
     * Let 1em = 16px
     *
     * MAX-WIDTH:
     * 74.9375em = 1199px
     * 56.1875em = 899px
     * 37.4375em = 599px
     * 29.9375em = 479px
     * 23.6875em = 379px
     *
     * MAX-WIDTH AND MIN-WIDTH
     * 61.9375em = 991px (max) AND 37.5em = 600px (min)
     * 74.9375em = 1199px (max) AND 62em = 992px (min)
     */

    // Response Range: [1199px - 900px]
    below1199: 'only screen and (max-width: 74.9375em)',
    // Response Range: [899px - 600px]
    below899: 'only screen and (max-width: 56.1875em)',
    // Response Range: [599px - 480px]
    below599: 'only screen and (max-width: 37.4375em)',
    // Response Range: [479px - 380px]
    below479: 'only screen and (max-width: 29.9375em)',
    // Response Range: [379px - 0]
    below379: 'only screen and (max-width: 23.6875em)',
    // Response Range: [1199px - 992px] and landscape
    between1199And992:
      'only screen and (max-width: 74.9375em) and (min-width: 62em) and (orientation: landscape)',
    // Response Range: [991px - 600px] and landscape
    between991And600:
      'only screen and (max-width: 61.9375em) and (min-width: 37.5em) and (orientation: landscape)',
  },
};

export default theme;
