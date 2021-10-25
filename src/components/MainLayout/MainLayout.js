import React from 'react';
import {
  MainLayoutRoot,
  MainLayoutWrapper,
  MainLayoutContainer,
  MainLayoutContent,
} from './MainLayout.style';
import MainNavBar from '../MainNavBar/MainNavBar';
import { Route, Redirect } from 'react-router-dom';
import Login from '../../pages/Login/Login';

export default function MainLayout() {
  return (
    <MainLayoutRoot>
      <MainNavBar />
      <MainLayoutWrapper>
        <MainLayoutContainer>
          <MainLayoutContent>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register"></Route>
            <Route exact path="/404"></Route>
            <Route exact path="/"></Route>
            {/* <Route exact path="*">
              <Redirect to="/404" />
            </Route> */}
          </MainLayoutContent>
        </MainLayoutContainer>
      </MainLayoutWrapper>
    </MainLayoutRoot>
  );
}
