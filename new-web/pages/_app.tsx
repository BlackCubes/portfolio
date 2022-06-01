import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { nextReduxWrapper } from 'app';

import { GlobalStyle } from 'common/base';

import Footer from 'common/components/Footer';
import Navbar from 'common/components/Navbar';

import { ThemeProvider } from 'common/providers';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <GlobalStyle />

      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </ThemeProvider>
  );
};

export default nextReduxWrapper.withRedux(MyApp);
