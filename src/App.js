import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalTheme from './styles/globals';

import Routes from './routes';

const App = () => {

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalTheme />
        <themeContext>
          <Routes />
        </themeContext>
    </ThemeProvider>
  );
}

export default App