import { createContext, useContext, useState } from 'react';

const CalendarContext = createContext();

export const useCalendarContext = () => useContext(CalendarContext);

export const CalendarContextProvider = ({ children }) => {
  const [workoutId, setWorkoutId] = useState(null);
  const [coachId, setCoachId] = useState(null);
  const [clientId, setClientId] = useState(null);
  const [date, setDate] = useState(Date.now());

  return (
    <CalendarContext.Provider
      value={[
        workoutId,
        setWorkoutId,
        coachId,
        setCoachId,
        clientId,
        setClientId,
        date,
        setDate,
      ]}
    >
      {children}
    </CalendarContext.Provider>
  );
};
