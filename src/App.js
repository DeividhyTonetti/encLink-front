import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalTheme from './styles/globals';

import Routes from './routes';

const App = () => {

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalTheme />
      <Routes />
    </ThemeProvider>
  );
}

export default App