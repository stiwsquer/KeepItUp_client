import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Calendar from '../Calendar/Calendar';
import DashboardSearch from '../DashboardSearch/DashboardSearch';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import { ROLES } from '../../services/apiCalls';
import CreateWorkout from '../CreateWorkout/CreateWorkout';
import DATA_TYPES from '../DataTypes';
import { useUserContext } from '../../Context/UserContext';

export default function AppRoute() {
  const [user] = useUserContext();

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
        {user.role === ROLES.COACH && (
          <>
            <Route path="/app/create-workout">
              <CreateWorkout />
            </Route>
            <Route path="/app/clients">
              <DashboardSearch dashboardType={DATA_TYPES.CLIENT} />
            </Route>
          </>
        )}
      </Route>
    </>
  );
}
