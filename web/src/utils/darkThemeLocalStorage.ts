type TDarkThemeState = boolean;

const LOCAL_STORAGE_DARK_THEME_KEY = 'isDarkTheme';

export const saveDarkThemeState = (isDarkTheme: TDarkThemeState): void => {
  localStorage.setItem(
    LOCAL_STORAGE_DARK_THEME_KEY,
    JSON.stringify(isDarkTheme)
  );
};

export const getDarkThemeState = (): TDarkThemeState | null => {
  const theme = localStorage.getItem(LOCAL_STORAGE_DARK_THEME_KEY);

  if (!theme) {
    return null;
  }

  return JSON.parse(theme);
};
