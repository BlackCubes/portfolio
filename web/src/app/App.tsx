import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from 'common/base';

import DarkModeToggle from 'common/components/DarkModeToggle';
import Footer from 'common/components/Footer';
import Navbar from 'common/components/Navbar';

import { ThemeProvider } from 'common/providers';

import ArticleRoutes from 'features/article/Routes';
import LandingRoutes from 'features/landing/Routes';
import WorkRoutes from 'features/work/Routes';

const App = () => (
  // ThemeProvider, for some reason, was not working in
  // `/web/index.tsx`, but it works here.
  <ThemeProvider>
    <GlobalStyle />

    <Navbar />

    <DarkModeToggle />

    <Routes>
      <Route path="/articles/*" element={<ArticleRoutes />} />

      <Route path="/work/*" element={<WorkRoutes />} />

      <Route path="/" element={<LandingRoutes />} />
    </Routes>

    <Footer />
  </ThemeProvider>
);

export default App;
