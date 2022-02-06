import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from 'common/base';
import Footer from 'common/components/Footer';
import Navbar from 'common/components/Navbar';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Navbar />

    <Footer />
  </ThemeProvider>
);

export default App;
