import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { StyledEngineProvider } from '@mui/styled-engine';
import GlobalStyles from './GlobalStyles';
import Layout from './components/Layout/Layout';
import theme from './theme/index';
import { DashboardSidebarContextProvider } from './Context/DashboardSidebarContext';
import { ExerciseContextProvider } from './Context/ExerciseCardContext';
import { ClientContextProvider } from './Context/ClientContext';

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <DashboardSidebarContextProvider>
            <ExerciseContextProvider>
              <ClientContextProvider>
                <GlobalStyles />
                <BrowserRouter>
                  <Layout />
                </BrowserRouter>
              </ClientContextProvider>
            </ExerciseContextProvider>
          </DashboardSidebarContextProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
