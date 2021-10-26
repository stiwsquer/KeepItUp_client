import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import {
  DashboardRoot,
  DashboardWrapper,
  DashboardContainer,
  DashboardContent,
} from './DashboardLayout.style';

export default function DashboardLayout() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <DashboardRoot>
      <NavBar isUserLoggedIn={true} setOpenMobileMenu={setOpenMobileMenu} />
      <DashboardWrapper>
        <DashboardContainer>
          <DashboardContent></DashboardContent>
        </DashboardContainer>
      </DashboardWrapper>
    </DashboardRoot>
  );
}
