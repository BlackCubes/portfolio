import { createContext, useContext } from 'react';

interface IThemeContext {
  toggleDark?: () => void;
}

const ThemeContext = createContext<IThemeContext>({});

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;
