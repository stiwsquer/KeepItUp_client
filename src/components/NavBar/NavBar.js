import { AppBar, Toolbar, Link, Hidden, IconButton, Box } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import InputIcon from '@mui/icons-material/Input';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar({ isUserLoggedIn, toggleSidebar }) {
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
          <Hidden mdUp>
            <IconButton color="inherit" size="large" onClick={toggleSidebar}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        )}
      </Toolbar>
    </AppBar>
  );
}
