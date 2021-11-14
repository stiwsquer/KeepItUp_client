import React from 'react';
import { TextField, Hidden } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { useCalendarContext } from '../../Context/CalendarContext';

export default function MyDatePicker() {
  const [calendarData, handleCalendarData] = useCalendarContext();

  const handleDateChange = (newValue) => {
    handleCalendarData({ date: newValue });
  };

  const datePicker = (
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
  );
  return (
    <>
      <Hidden smDown>
        <div style={{ margin: '0 0 0 1rem' }}>{datePicker}</div>
      </Hidden>

      <Hidden smUp>
        <div style={{ margin: '1rem 0 0 0' }}>{datePicker}</div>
      </Hidden>
    </>
  );
}
