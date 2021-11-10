import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Calendar from '../Calendar/Calendar';
import DashboardSearch from '../DashboardSearch/DashboardSearch';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';
import CreateWorkout from '../CreateWorkout/CreateWorkout';
import DATA_TYPES from '../DataTypes';

export default function AppRoute() {
  const history = useHistory();

  useEffect(async () => {
    const res = await fetchData(
      null,
      HTTP_METHODS.POST,
      ENDPOINTS.VERIFY,
      CREDENTIALS.INCLUDE,
    );
    console.log(res);
    if (res.status !== 200) history.push('/');
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard | KeepItUp</title>
      </Helmet>
      <Route path="/app">
        <DashboardSidebar />
        <Route path="/app/exercises">
          <DashboardSearch dashboardType={DATA_TYPES.EXERCISE} bigCard />
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
