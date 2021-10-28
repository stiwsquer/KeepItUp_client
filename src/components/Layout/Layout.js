import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

export default function Layout() {
  return (
    <>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </>
  );
}
