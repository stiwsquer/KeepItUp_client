import React from 'react';
import { Route } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
import DashboardLayout from './DashboardLayout/DashboardLayout';
import { useDashboardSidebarContext } from '../../Context/DashboardSidebarContext';
import NavBar from '../NavBar/NavBar';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { ROLES } from '../../services/apiCalls';

export default function Layout() {
  const toggleSidebar = useDashboardSidebarContext()[2];

  return (
    <>
      <NavBar toggleSidebar={toggleSidebar} />
      <ProtectedRoute
        roles={[ROLES.COACH, ROLES.CLIENT]}
        path="/app"
        component={DashboardLayout}
      />
      <Route path="/">
        <MainLayout />
      </Route>
    </>
  );
}
