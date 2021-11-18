import React from 'react';
import { Helmet } from 'react-helmet';
import DashboardSearch from '../DashboardSearch/DashboardSearch';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import { ROLES } from '../../services/apiCalls';
import CreateWorkout from '../CreateWorkout/CreateWorkout';
import DATA_TYPES from '../DataTypes';
import DashboardCalendar from '../DashboardCalendar/DashboardCalendar';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

export default function AppRoute() {
  return (
    <>
      <Helmet>
        <title>Dashboard | KeepItUp</title>
      </Helmet>
      <DashboardSidebar />
      <ProtectedRoute
        roles={[ROLES.COACH, ROLES.CLIENT]}
        path="/app/exercises"
        dashboardType={DATA_TYPES.EXERCISE}
        bigCard
        component={DashboardSearch}
      />
      <ProtectedRoute
        roles={[ROLES.COACH, ROLES.CLIENT]}
        path="/app/calendar"
        component={DashboardCalendar}
      />

      <ProtectedRoute
        roles={[ROLES.COACH]}
        path="/app/create-workout"
        component={CreateWorkout}
      />
      <ProtectedRoute
        roles={[ROLES.COACH]}
        path="/app/clients"
        dashboardType={DATA_TYPES.CLIENT}
        component={DashboardSearch}
      />
      <ProtectedRoute
        roles={[ROLES.COACH, ROLES.CLIENT]}
        path="/app/workouts"
        dashboardType={DATA_TYPES.WORKOUT}
        component={DashboardSearch}
      />
    </>
  );
}
