import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage/LandingPage';

export default function LandingRoute() {
  return (
    <Route exact path="/">
      <LandingPage />
    </Route>
  );
}
