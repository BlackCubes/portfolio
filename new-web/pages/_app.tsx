import '../styles/globals.css';
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';

import { nextReduxWrapper } from 'app';

import { GlobalStyle } from 'common/base';

import DarkMode from 'common/components/DarkMode';
import Footer from 'common/components/Footer';
import Navbar from 'common/components/Navbar';

import { ThemeProvider } from 'common/providers';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const [isFirstMount, setIsFirstMount] = useState(true);

  const unloadedScrollToTop = (event: BeforeUnloadEvent): void => {
    event.preventDefault();

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('beforeunload', unloadedScrollToTop);

    return () => {
      window.removeEventListener('beforeunload', unloadedScrollToTop);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isFirstMount) setIsFirstMount(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isFirstMount]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />

        <meta name="theme-color" content="#000811" />

        <link rel="apple-touch-icon" href="/logo192.png" />

        <link rel="manifest" href="/manifest.json" />
      </Head>

      <ThemeProvider>
        <GlobalStyle />

        <Navbar isFirstMount={isFirstMount} />

        <DarkMode isFirstMount={isFirstMount} />

        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component
            {...pageProps}
            isFirstMount={isFirstMount}
            key={router.route}
          />
        </AnimatePresence>

        <Footer />
      </ThemeProvider>
    </>
  );
};

export default nextReduxWrapper.withRedux(MyApp);
