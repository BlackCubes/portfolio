import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from 'common/base';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
