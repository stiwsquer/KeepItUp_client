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
import { CalendarContextProvider } from './Context/CalendarContext';

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <DashboardSidebarContextProvider>
            <ExerciseContextProvider>
              <ClientContextProvider>
                <CalendarContextProvider>
                  <GlobalStyles />
                  <BrowserRouter>
                    <Layout />
                  </BrowserRouter>
                </CalendarContextProvider>
              </ClientContextProvider>
            </ExerciseContextProvider>
          </DashboardSidebarContextProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
