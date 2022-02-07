import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from 'common/base';
import Footer from 'common/components/Footer';
import Navbar from 'common/components/Navbar';

import LandingRoutes from 'features/landing/Routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Navbar />

    <Routes>
      <Route path="/" element={<LandingRoutes />} />
    </Routes>

    <Footer />
  </ThemeProvider>
);

export default App;
