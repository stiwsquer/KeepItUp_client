import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { StyledEngineProvider } from '@mui/styled-engine';
import GlobalStyles from './GlobalStyles';
import Layout from './components/Layout/Layout';
import theme from './theme/index';
import { DashboardSidebarContextProvider } from './Context/DashboardSidebarContext';
import { ExerciseContextProvider } from './Context/ExerciseCardContext';

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <DashboardSidebarContextProvider>
            <ExerciseContextProvider>
              <GlobalStyles />
              <BrowserRouter>
                <Layout />
              </BrowserRouter>
            </ExerciseContextProvider>
          </DashboardSidebarContextProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
