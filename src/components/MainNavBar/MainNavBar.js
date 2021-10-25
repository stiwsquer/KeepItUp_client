import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../icons/Logo';

export default function MainNavBar(props) {
  return (
    <AppBar elevation={0} {...props}>
      <Toolbar sx={{ height: 64 }}>
        <Link to="/">
          <Logo />
        </Link>
      </Toolbar>
    </AppBar>
  );
}
