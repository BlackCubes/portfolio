import React, { FC, useEffect, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { IColorTheme } from 'styled';

import { theme as styledTheme } from 'common/base';
import { ThemeContext } from 'common/contexts';

type TDarkThemeColors = Omit<IColorTheme, 'black' | 'white'>;

const darkThemeColors: Required<TDarkThemeColors> = {
  body: {
    hex: '#000',
    rgb: '0,0,0',
  },
  glass: {
    hex: '#98b5ff',
    rgb: '152,181,255',
  },
  glassDarkShadow: {
    hex: '#103eb1',
    rgb: '16,62,177',
  },
  glassLightShadow: {
    hex: '#3971ff',
    rgb: '57,113,255',
  },
  primary: {
    hex: '#e6edff',
    rgb: '230,237,255',
  },
  secondary: {
    hex: '#fafbff',
    rgb: '250,251,255',
  },
};

const ThemeProvider: FC = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState(styledTheme);

  const toggleDark = () => {
    const timer = setTimeout(() => {
      setIsDark((currentIsDark) => !currentIsDark);
    }, 500);

    return () => clearTimeout(timer);
  };

  const providerValue = useMemo(() => ({ isDark, toggleDark }), []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTheme((currentTheme) => {
        const colors = {
          ...currentTheme.colors,
          body: !isDark ? styledTheme.colors.body : darkThemeColors.body,
          glass: !isDark ? styledTheme.colors.glass : darkThemeColors.glass,
          glassDarkShadow: !isDark
            ? styledTheme.colors.glassDarkShadow
            : darkThemeColors.glassDarkShadow,
          glassLightShadow: !isDark
            ? styledTheme.colors.glassLightShadow
            : darkThemeColors.glassLightShadow,
          primary: !isDark
            ? styledTheme.colors.primary
            : darkThemeColors.primary,
          secondary: !isDark
            ? styledTheme.colors.secondary
            : darkThemeColors.secondary,
        };

        return {
          ...currentTheme,
          colors,
        };
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={providerValue}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
