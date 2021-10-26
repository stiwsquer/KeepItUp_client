import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import MainLayout from '../MainLayout/MainLayout';

export default function Layout() {
  return (
    <>
      <BrowserRouter>
        <Route path="/">
          <MainLayout />
        </Route>
        <Route path="/app">
          <DashboardLayout />
        </Route>
      </BrowserRouter>
    </>
  );
}
