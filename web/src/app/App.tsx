import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { GlobalStyle } from 'common/base';

import DarkModeToggle from 'common/components/DarkModeToggle';
import Footer from 'common/components/Footer';
import Navbar from 'common/components/Navbar';

import { ThemeProvider } from 'common/providers';

import { ArticleDetailView, ArticleListView } from 'features/article/pages';
import LandingListView from 'features/landing/pages';
import { WorkDetailView, WorkListView } from 'features/work/pages';

const App = () => {
  const location = useLocation();

  return (
    // ThemeProvider, for some reason, was not working in
    // `/web/index.tsx`, but it works here.
    <ThemeProvider>
      <GlobalStyle />

      <Navbar />

      <DarkModeToggle />

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="" element={<LandingListView />} />

          <Route path="/work" element={<WorkListView />} />

          <Route path="/work/:workSlug" element={<WorkDetailView />} />

          <Route path="/articles" element={<ArticleListView />} />

          <Route
            path="/articles/:articleSlug"
            element={<ArticleDetailView />}
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
