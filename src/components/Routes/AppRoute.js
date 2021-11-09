import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Calendar from '../Calendar/Calendar';
import DashboardExercises from '../DashboardExercises/DashboardExercises';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import { fetchVerify } from '../../services/apiCalls';
import CreateWorkout from '../CreateWorkout/CreateWorkout';

export default function AppRoute() {
  const history = useHistory();

  useEffect(async () => {
    const res = await fetchVerify();
    console.log(res);
    if (!res) history.push('/');
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard | KeepItUp</title>
      </Helmet>
      <Route path="/app">
        <DashboardSidebar />
        <Route path="/app/exercises">
          <DashboardExercises fullPage />
        </Route>
        <Route path="/app/calendar">
          <Calendar />
        </Route>
        <Route path="/app/create-workout">
          <CreateWorkout />
        </Route>
      </Route>
    </>
  );
}
