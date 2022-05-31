import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { nextReduxWrapper } from 'app';

import { GlobalStyle } from 'common/base';

import { ThemeProvider } from 'common/providers';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default nextReduxWrapper.withRedux(MyApp);
