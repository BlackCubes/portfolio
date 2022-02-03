import 'styled-components';

interface IColorTheme {
  black: string;
  white: string;
  primary: string;
  secondary: string;
  glass: string;
  glassLightShadow: string;
  glassDarkShadow: string;
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
    responsive: IResponsiveTheme;
  }
}
