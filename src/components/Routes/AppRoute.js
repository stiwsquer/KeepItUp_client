import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Calendar from '../Calendar/Calendar';
import DashboardExercises from '../DashboardExercises/DashboardExercises';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import { fetchVerify } from '../../services/apiCalls';

export default function AppRoute() {
  const history = useHistory();

  useEffect(async () => {
    const res = await fetchVerify();
    console.log(res);
    if (!res) history.push('/');
  }, []);

  return (
    <Route path="/app">
      <DashboardSidebar />
      <Route path="/app/exercises">
        <DashboardExercises />
      </Route>
      <Route path="/app/calendar">
        <Calendar />
      </Route>
    </Route>
  );
}
