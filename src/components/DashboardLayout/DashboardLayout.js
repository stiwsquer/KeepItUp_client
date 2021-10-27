import React, { useState } from 'react';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import NavBar from '../NavBar/NavBar';
import {
  DashboardRoot,
  DashboardWrapper,
  DashboardContainer,
  DashboardContent,
} from './DashboardLayout.style';

export default function DashboardLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const onDashboardSidebarClose = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpenSidebar(false);
  };

  const toggleSidebar = () => {
    if (openSidebar) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  };

  return (
    <DashboardRoot>
      <NavBar isUserLoggedIn={true} toggleSidebar={toggleSidebar} />
      <DashboardSidebar
        openSidebar={openSidebar}
        onDashboardSidebarClose={onDashboardSidebarClose}
      />
      <DashboardWrapper>
        <DashboardContainer>
          <DashboardContent></DashboardContent>
        </DashboardContainer>
      </DashboardWrapper>
    </DashboardRoot>
  );
}
