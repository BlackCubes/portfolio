import { createContext, useContext } from 'react';

interface IThemeContext {
  isDark: boolean;
  toggleDark?: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  isDark: false,
});

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;
