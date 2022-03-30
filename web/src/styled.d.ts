import 'styled-components';

// RGB IS IN DECIMAL
type TColorProperties = {
  hex: string;
  rgb: string;
};

// THIS IS BEING EXPORTED SINCE IT IS BEING USED IN `ThemeProvider.tsx`
export interface IColorTheme {
  black: TColorProperties;
  body: TColorProperties;
  white: TColorProperties;
  primary: TColorProperties;
  secondary: TColorProperties;
  glass: TColorProperties;
  glassLightShadow: TColorProperties;
  glassDarkShadow: TColorProperties;
}

interface IFontTheme {
  headingPrimary: string;
  headingSecondary: string;
  headingTertiary: string;
  paragraph: string;
}

type TIsDarkTheme = boolean;

interface IResponsiveTheme {
  below1199: string;
  below899: string;
  below599: string;
  below479: string;
  below379: string;
  between1199And992: string;
  between991And600: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColorTheme;
    fonts: IFontTheme;
    isDarkTheme: TIsDarkTheme;
    responsive: IResponsiveTheme;
  }
}
