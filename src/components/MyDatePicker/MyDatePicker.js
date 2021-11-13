import React from 'react';
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { useCalendarContext } from '../../Context/CalendarContext';

export default function MyDatePicker() {
  const [calendarData, handleCalendarData] = useCalendarContext();

  const handleDateChange = (newValue) => {
    handleCalendarData({ date: newValue });
  };
  return (
    <div style={{ margin: '0 0 0 1rem' }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          minDate={new Date()}
          label="Date"
          inputFormat="yyyy-MM-dd"
          value={calendarData.date}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
