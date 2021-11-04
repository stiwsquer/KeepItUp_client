import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
import DashboardLayout from './DashboardLayout/DashboardLayout';
import { useDashboardSidebarContext } from '../../Context/DashboardSidebarContext';
import NavBar from '../NavBar/NavBar';

export default function Layout() {
  const location = useLocation();
  const toggleSidebar = useDashboardSidebarContext()[2];

  const isUserLoggedIn = () => {
    if (location.pathname.includes('app')) {
      return true;
    }
    return false;
  };

  return (
    <>
      <NavBar isUserLoggedIn={isUserLoggedIn()} toggleSidebar={toggleSidebar} />
      <Route path="/app">
        <DashboardLayout />
      </Route>
      <Route path="/">
        <MainLayout />
      </Route>
    </>
  );
}
