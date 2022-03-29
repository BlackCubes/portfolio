import React, { FC, useCallback, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { theme as styledTheme } from 'common/base';
import { ThemeContext } from 'common/contexts';

type TColorProperties = {
  hex: string;
  rgb: string;
};

type TDarkThemeColors = {
  glass: TColorProperties;
  glassDarkShadow: TColorProperties;
  glassLightShadow: TColorProperties;
  primary: TColorProperties;
  secondary: TColorProperties;
};

const darkThemeColors: Required<TDarkThemeColors> = {
  glass: {
    hex: '',
    rgb: '',
  },
  glassDarkShadow: {
    hex: '',
    rgb: '',
  },
  glassLightShadow: {
    hex: '',
    rgb: '',
  },
  primary: {
    hex: '#002d5f',
    rgb: '0,45,95',
  },
  secondary: {
    hex: '#003d84',
    rgb: '0,61,132',
  },
};

const ThemeProvider: FC = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState(styledTheme);

  const toggleDark = useCallback(() => {
    setIsDark((currentIsDark) => !currentIsDark);

    setTheme((currentTheme) => {
      const colors = {
        ...currentTheme.colors,
        glass: !isDark ? styledTheme.colors.glass : darkThemeColors.glass,
        glassDarkShadow: !isDark
          ? styledTheme.colors.glassDarkShadow
          : darkThemeColors.glassDarkShadow,
        glassLightShadow: !isDark
          ? styledTheme.colors.glassLightShadow
          : darkThemeColors.glassLightShadow,
        primary: !isDark ? styledTheme.colors.primary : darkThemeColors.primary,
        secondary: !isDark
          ? styledTheme.colors.secondary
          : darkThemeColors.secondary,
      };

      return {
        ...currentTheme,
        colors,
      };
    });
  }, [isDark]);

  const providerValue = useMemo(() => ({ isDark, toggleDark }), []);

  return (
    <ThemeContext.Provider value={providerValue}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
