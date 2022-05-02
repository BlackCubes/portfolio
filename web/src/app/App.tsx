import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { GlobalStyle } from 'common/base';

import DarkModeToggle from 'common/components/DarkModeToggle';
import Footer from 'common/components/Footer';
import Navbar from 'common/components/Navbar';

import { ThemeProvider } from 'common/providers';

import { AboutListView } from 'features/about/pages';
import { ArticleDetailView, ArticleListView } from 'features/article/pages';
import { LandingListView } from 'features/landing/pages';
import { WorkDetailView, WorkListView } from 'features/work/pages';

const App = () => {
  const [isFirstMount, setIsFirstMount] = useState(true);

  const location = useLocation();

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
      if (isFirstMount) {
        setIsFirstMount(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isFirstMount]);

  return (
    // ThemeProvider, for some reason, was not working in
    // `/web/index.tsx`, but it works here.
    <ThemeProvider>
      <GlobalStyle />

      <Navbar />

      <DarkModeToggle />

      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scroll(0, 0)}
      >
        <Routes location={location} key={location.pathname}>
          <Route
            path=""
            element={<LandingListView isFirstMount={isFirstMount} />}
          />

          <Route path="/work" element={<WorkListView />} />

          <Route path="/work/:workSlug" element={<WorkDetailView />} />

          <Route path="/articles" element={<ArticleListView />} />

          <Route
            path="/articles/:articleSlug"
            element={<ArticleDetailView />}
          />

          <Route path="/about" element={<AboutListView />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
