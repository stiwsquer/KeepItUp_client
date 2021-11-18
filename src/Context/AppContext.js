import { AlertContextProvider } from './AlertContext';
import { CalendarContextProvider } from './CalendarContext';
import { FetchTogglerContextProvider } from './FetchTogglerContext';
import { DashboardSidebarContextProvider } from './DashboardSidebarContext';
import { ExerciseContextProvider } from './ExerciseCardContext';
import { UserContextProvider } from './UserContext';

import CombineComponents from '../components/CombineComponents/CombineComponents';

const providers = [
  DashboardSidebarContextProvider,
  ExerciseContextProvider,
  FetchTogglerContextProvider,
  CalendarContextProvider,
  AlertContextProvider,
  UserContextProvider,
];
const AppContextProvider = CombineComponents(...providers);

export default AppContextProvider;
