import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { StyledEngineProvider } from '@mui/styled-engine';
import GlobalStyles from './GlobalStyles';
import Layout from './components/Layout/Layout';
import theme from './theme/index';
import AppContextProvider from './Context/AppContext';

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <AppContextProvider>
            <GlobalStyles />
            <BrowserRouter>
              <Layout />
            </BrowserRouter>
          </AppContextProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
