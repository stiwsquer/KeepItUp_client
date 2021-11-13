import { createContext, useContext, useState } from 'react';

const CalendarContext = createContext();

export const useCalendarContext = () => useContext(CalendarContext);

export const CalendarContextProvider = ({ children }) => {
  // const [workoutId, setWorkoutId] = useState(null);
  // const [coachId, setCoachId] = useState(null);
  // const [clientId, setClientId] = useState(null);
  // const [date, setDate] = useState(Date.now());

  const [calendarData, setCalendarData] = useState({
    workout: null,
    coach: null,
    client: null,
    date: null,
  });

  function handleCalendarData(data) {
    setCalendarData((prev) => ({ ...prev, ...data }));
  }

  return (
    <CalendarContext.Provider value={[calendarData, handleCalendarData]}>
      {children}
    </CalendarContext.Provider>
  );
};
