import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { isPast } from 'date-fns';

export default function Calendar({ date, handleDateChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        // displayStaticWrapperAs="desktop"
        label="Calendar"
        value={date}
        onChange={handleDateChange}
        shouldDisableDate={isPast}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
