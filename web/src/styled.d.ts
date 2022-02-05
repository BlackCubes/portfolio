import 'styled-components';

// RGB IS IN DECIMAL
interface IColorTheme {
  black: { hex: string; rgb: string };
  white: { hex: string; rgb: string };
  primary: { hex: string; rgb: string };
  secondary: { hex: string; rgb: string };
  glass: { hex: string; rgb: string };
  glassLightShadow: { hex: string; rgb: string };
  glassDarkShadow: { hex: string; rgb: string };
}

interface IFontTheme {
  headingPrimary: string;
  headingSecondary: string;
  headingTertiary: string;
  paragraph: string;
}

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
    responsive: IResponsiveTheme;
  }
}
