const LOCAL_STORAGE_DARK_THEME_KEY = 'isDarkTheme';

export type TDarkThemeState = boolean;

export const saveDarkThemeState = (isDarkTheme: TDarkThemeState): void => {
  localStorage.setItem(
    LOCAL_STORAGE_DARK_THEME_KEY,
    JSON.stringify(isDarkTheme)
  );
};

export const getDarkThemeState = (): TDarkThemeState => {
  const theme = localStorage.getItem(LOCAL_STORAGE_DARK_THEME_KEY);

  if (!theme) {
    return false;
  }

  return JSON.parse(theme);
};
