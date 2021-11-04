import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import {
  LayoutRoot,
  LayoutWrapper,
  LayoutContainer,
  LayoutContent,
} from './MainLayout.style';
import NavBar from '../NavBar/NavBar';
import LoginRoute from '../Routes/LoginRoute';
import RegisterRoute from '../Routes/RegisterRoute';
import AppRoute from '../Routes/AppRoute';
import LandingRoute from '../Routes/LandingRoute';
import { useDashboardSidebarContext } from '../../Context/DashboardSidebarContext';

export default function MainLayout() {
  const location = useLocation();
  const toggleSidebar = useDashboardSidebarContext()[2];

  const navbarDisplay = () => {
    if (location.pathname.includes('app')) {
      return true;
    }
    return false;
  };

  return (
    <LayoutRoot>
      <NavBar isUserLoggedIn={navbarDisplay()} toggleSidebar={toggleSidebar} />;
      <LayoutWrapper isPadding={navbarDisplay()}>
        <LayoutContainer>
          <LayoutContent>
            <LoginRoute />
            <RegisterRoute />
            <AppRoute />
            <Route exact path="/404" />
            <LandingRoute />
            {/* <Route path="*">
              <Redirect to="/404" />
            </Route> */}
          </LayoutContent>
        </LayoutContainer>
      </LayoutWrapper>
    </LayoutRoot>
  );
}
