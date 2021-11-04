import React from 'react';
import { Route } from 'react-router-dom';
import Register from '../../pages/Register/Register';

export default function RegisterRoute() {
  return (
    <Route exact path="/register">
      <Register />
    </Route>
  );
}
