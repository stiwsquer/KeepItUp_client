import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/styled-engine';
import GlobalStyles from './GlobalStyles';
import Layout from './components/Layout/Layout';
import AppContextProvider from './Context/AppContext';

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <AppContextProvider>
          <GlobalStyles />
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </AppContextProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
