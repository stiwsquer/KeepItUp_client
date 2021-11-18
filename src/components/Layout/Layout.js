import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Route } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
import DashboardLayout from './DashboardLayout/DashboardLayout';
import { useDashboardSidebarContext } from '../../Context/DashboardSidebarContext';
import NavBar from '../NavBar/NavBar';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { ROLES } from '../../services/apiCalls';
import theme from '../../theme/index';

export default function Layout() {
  const toggleSidebar = useDashboardSidebarContext()[2];

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar toggleSidebar={toggleSidebar} />
        <ProtectedRoute
          roles={[ROLES.COACH, ROLES.CLIENT]}
          path="/app"
          component={DashboardLayout}
        />
        <Route path="/">
          <MainLayout />
        </Route>
      </ThemeProvider>
    </>
  );
}
