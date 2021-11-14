import React, { useState, useEffect } from 'react';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';
import Calendar from '../Calendar/Calendar';
import CalendarCard from '../CalendarCard/CalendarCard';
import formatDate from '../FormatDate/FormatDate';

export default function DashboardCalendar() {
  const [date, setDate] = useState(formatDate(new Date()));
  const [data, setData] = useState([]);

  const handleDateChange = (newValue) => {
    const formattedDate = formatDate(newValue);
    setDate(formattedDate);
  };

  const handleFetchCalendars = async () => {
    const res = await fetchData(
      null,
      HTTP_METHODS.GET,
      ENDPOINTS.CALENDAR_DATE,
      CREDENTIALS.INCLUDE,
      date,
    );
    setData(res.results);
    console.log(res.results);
  };

  useEffect(() => {
    handleFetchCalendars();
  }, [date]);

  return (
    <>
      <Calendar date={date} handleDateChange={handleDateChange} />

      {data &&
        data.map((card) => (
          <CalendarCard
            key={card.id}
            id={card.id}
            client={card.client}
            workout={card.workout}
            date={card.date}
          />
        ))}
    </>
  );
}
