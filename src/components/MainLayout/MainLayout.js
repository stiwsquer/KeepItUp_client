import React, { useState } from 'react';
import { Route, useLocation } from 'react-router-dom';
import {
  LayoutRoot,
  LayoutWrapper,
  LayoutContainer,
  LayoutContent,
} from './MainLayout.style';
import NavBar from '../NavBar/NavBar';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import LandingPage from '../../pages/LandingPage/LandingPage';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

export default function MainLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const location = useLocation();
  const paths1 = ['/', '/login', '/register', '/404'];
  const paths2 = ['/app'];

  const onDashboardSidebarClose = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpenSidebar(false);
  };

  const toggleSidebar = () => {
    if (openSidebar) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  };

  const navbarDisplay = () => {
    console.log(location.pathname);
    if (paths2.includes(location.pathname)) {
      return true;
    }
    if (paths1.includes(location.pathname)) {
      return false;
    }
    return false;
  };

  return (
    <LayoutRoot>
      <NavBar isUserLoggedIn={navbarDisplay()} toggleSidebar={toggleSidebar} />;
      <LayoutWrapper isPadding={navbarDisplay()}>
        <LayoutContainer>
          <LayoutContent>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="/app">
              <DashboardSidebar
                openSidebar={openSidebar}
                onDashboardSidebarClose={onDashboardSidebarClose}
              />
            </Route>
            <Route exact path="/404" />
            <Route exact path="/">
              <LandingPage />
            </Route>
            {/* <Route path="*">
              <Redirect to="/404" />
            </Route> */}
          </LayoutContent>
        </LayoutContainer>
      </LayoutWrapper>
    </LayoutRoot>
  );
}
