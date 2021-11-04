import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { isPast } from 'date-fns';

export default function CustomDay() {
  const [date, setDate] = useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        // displayStaticWrapperAs="desktop"
        label="Data picker"
        value={date}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        backgroundColor="primary"
        shouldDisableDate={isPast}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
