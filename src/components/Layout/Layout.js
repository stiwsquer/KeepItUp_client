import React, { useEffect } from 'react';
import { Route, useLocation, useHistory } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
import DashboardLayout from './DashboardLayout/DashboardLayout';
import { useDashboardSidebarContext } from '../../Context/DashboardSidebarContext';
import NavBar from '../NavBar/NavBar';
import { useUserContext } from '../../Context/UserContext';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';

export default function Layout() {
  const location = useLocation();
  const toggleSidebar = useDashboardSidebarContext()[2];
  const [user, setUser] = useUserContext();
  const history = useHistory();

  useEffect(async () => {
    let res = await fetchData(
      null,
      HTTP_METHODS.POST,
      ENDPOINTS.VERIFY,
      CREDENTIALS.INCLUDE,
    );
    if (res.status !== 200) history.push('/');
    res = await res.json();
    setUser(res);
    console.log(res);
  }, []);

  const isUserLoggedIn = () => {
    if (location.pathname.includes('app') && user.role) {
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
