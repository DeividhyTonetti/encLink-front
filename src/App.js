import React, { useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalTheme from './styles/globals';
import themeContext  from './contexts/themeContext';

import Routes from './routes';


const App = () => {

  // const theme = useContext(themeContext);
  
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