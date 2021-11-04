import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../../pages/Login/Login';

export default function LoginRoute() {
  return (
    <Route exact path="/login">
      <Login />
    </Route>
  );
}
