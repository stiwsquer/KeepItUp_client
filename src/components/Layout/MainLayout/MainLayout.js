import React from 'react';
import { Route } from 'react-router-dom';
import {
  LayoutRoot,
  LayoutWrapper,
  LayoutContainer,
  LayoutContent,
} from '../Layout.style';
import LoginRoute from '../../Routes/LoginRoute';
import RegisterRoute from '../../Routes/RegisterRoute';
import LandingRoute from '../../Routes/LandingRoute';

export default function MainLayout() {
  return (
    <LayoutRoot>
      <LayoutWrapper isPadding={false}>
        <LayoutContainer>
          <LayoutContent>
            <LandingRoute />
            <LoginRoute />
            <RegisterRoute />
            <Route exact path="/404" />
          </LayoutContent>
        </LayoutContainer>
      </LayoutWrapper>
    </LayoutRoot>
  );
}
