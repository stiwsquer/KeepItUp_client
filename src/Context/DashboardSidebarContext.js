import React, { useState, createContext, useContext } from 'react';

const DashboardSidebarContext = createContext();

export const useDashboardSidebarContext = () =>
  useContext(DashboardSidebarContext);

export const DashboardSidebarContextProvider = ({ children }) => {
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
    <DashboardSidebarContext.Provider
      value={[openSidebar, onDashboardSidebarClose, toggleSidebar]}
    >
      {children}
    </DashboardSidebarContext.Provider>
  );
};
