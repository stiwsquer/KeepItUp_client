import React from 'react';
import {
  MainRoot,
  MainWrapper,
  MainContainer,
  MainContent,
} from './MainLayout.style';
import NavBar from '../NavBar/NavBar';
import { Route } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import LandingPage from '../../pages/LandingPage/LandingPage';

export default function MainLayout() {
  return (
    <MainRoot>
      <NavBar isUserLoggedIn={false} />
      <MainWrapper>
        <MainContainer>
          <MainContent>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/404"></Route>
            <Route exact path="/">
              <LandingPage />
            </Route>
            {/* <Route exact path="*">
              <Redirect to="/404" />
            </Route> */}
          </MainContent>
        </MainContainer>
      </MainWrapper>
    </MainRoot>
  );
}
