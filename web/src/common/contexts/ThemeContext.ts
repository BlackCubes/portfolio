import { createContext, useContext } from 'react';

type TThemeContext = 'light' | 'dark';

const ThemeContext = createContext<TThemeContext>('light');

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;
