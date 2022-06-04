const LOCAL_STORAGE_DARK_THEME_KEY = 'isDarkTheme';

export type TDarkThemeState = boolean;

export const saveDarkThemeState = (isDarkTheme: TDarkThemeState): void => {
  // This conditional is done since this is a Next.js app, and not a regular
  // React app
  if (typeof window !== 'undefined') {
    localStorage.setItem(
      LOCAL_STORAGE_DARK_THEME_KEY,
      JSON.stringify(isDarkTheme)
    );
  }
};

export const getDarkThemeState = (): TDarkThemeState => {
  // This ternary is done since this is a Next.js app, and not a regular
  // React app
  const theme =
    typeof window !== 'undefined'
      ? localStorage.getItem(LOCAL_STORAGE_DARK_THEME_KEY)
      : null;

  if (!theme) return false;

  return JSON.parse(theme);
};
