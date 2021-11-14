import React from 'react';
import { Hidden, Drawer } from '@mui/material';
import { useDashboardSidebarContext } from '../../Context/DashboardSidebarContext';
import DashboardSidebarList from '../DashboardSidebarList/DashboardSidebarList';

export default function DashboardSidebar() {
  const [openSidebar, onDashboardSidebarClose] = useDashboardSidebarContext();

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={openSidebar}
          onClose={onDashboardSidebarClose}
          sx={{ zIndex: '0' }}
        >
          <DashboardSidebarList />
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer variant="permanent" anchor="left" open sx={{ zIndex: '0' }}>
          <DashboardSidebarList />
        </Drawer>
      </Hidden>
    </>
  );
}
