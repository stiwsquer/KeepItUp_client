import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

export default function Layout() {
  return (
    <>
      <BrowserRouter>
        <Route path="/">
          <MainLayout />
        </Route>
        {/* <Route exact path="/app"></Route> */}
      </BrowserRouter>
    </>
  );
}
