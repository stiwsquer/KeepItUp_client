import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useDashboardSidebarContext } from '../../Context/DashboardSidebarContext';
import DashboardExercises from '../DashboardExercises/DashboardExercises';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import { fetchVerify } from '../../services/apiCalls';

export default function AppRoute() {
  const [openSidebar, onDashboardSidebarClose] = useDashboardSidebarContext();
  const history = useHistory();

  useEffect(async () => {
    const res = await fetchVerify();
    console.log(res);
    if (!res) history.push('/');
  }, []);

  return (
    <Route path="/app">
      <DashboardSidebar
        openSidebar={openSidebar}
        onDashboardSidebarClose={onDashboardSidebarClose}
      />
      <Route path="/app/exercises">
        <DashboardExercises />
      </Route>
    </Route>
  );
}
