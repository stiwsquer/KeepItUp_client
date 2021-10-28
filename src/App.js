import { ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine';
import GlobalStyles from './GlobalStyles';
import Layout from './components/Layout/Layout';
import theme from './theme/index';

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Layout />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
