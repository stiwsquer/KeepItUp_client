import React from 'react';
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { useCalendarContext } from '../../Context/CalendarContext';

export default function MyDatePicker() {
  const [, , , , , , date, setDate] = useCalendarContext();

  const handleDateChange = (newValue) => {
    setDate(newValue);
  };
  return (
    <div style={{ margin: '0 0 0 1rem' }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label="Date"
          inputFormat="MM/dd/yyyy"
          value={date}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
