import { AppBar, Toolbar, Link, Hidden, IconButton, Box } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import InputIcon from '@mui/icons-material/Input';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';
import { useUserContext } from '../../Context/UserContext';

export default function NavBar({ isUserLoggedIn, toggleSidebar }) {
  const [, setUser] = useUserContext();

  const logout = async () => {
    const res = await fetchData(
      null,
      HTTP_METHODS.DELETE,
      ENDPOINTS.LOGOUT,
      CREDENTIALS.INCLUDE,
    );
    console.log(res);
    if (res.status === 200) {
      setUser({});
    }
  };

  return (
    <AppBar elevation={0} sx={{ zIndex: '1000' }}>
      <Toolbar sx={{ height: 64 }}>
        <Link
          component={RouterLink}
          to="/"
          underline="none"
          variant="h3"
          color="background.default"
          sx={{
            fontFamily: 'Teko, sans-serif',
          }}
        >
          KeepItUp
        </Link>
        <Box
          sx={{
            flex: '1',
          }}
        />

        {!isUserLoggedIn && (
          <RouterLink
            to="/login"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <IconButton color="inherit" size="large">
              <InputIcon />
            </IconButton>
          </RouterLink>
        )}

        {isUserLoggedIn && (
          <>
            <RouterLink
              to="/"
              style={{ textDecoration: 'none', color: 'white' }}
              onClick={() => logout()}
            >
              <IconButton color="inherit" size="large">
                <LogoutIcon />
              </IconButton>
            </RouterLink>

            <Hidden lgUp>
              <IconButton color="inherit" size="large" onClick={toggleSidebar}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
