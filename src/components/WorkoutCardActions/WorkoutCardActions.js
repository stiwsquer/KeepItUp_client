import { CardActions, IconButton } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ExpandMore from '../ExpandMore/ExpandMore';
import { useCalendarContext } from '../../Context/CalendarContext';
import { useAlertContext } from '../../Context/AlertContext';

import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';

export default function WorkoutCardActions({
  expanded,
  handleExpandClick,
  workoutId,
  disableAddButton,
}) {
  const [calendarData, handleCalendarData] = useCalendarContext();
  const [, handleAlertData] = useAlertContext();

  const handleAddCalendarItem = async () => {
    const newDate = new Date(calendarData.date);
    const year = newDate.getFullYear();
    const month = newDate.getUTCMonth() + 1;
    const day = newDate.getDate();
    handleCalendarData({ date: `${year}-${month}-${day}`, workout: workoutId });
    const data = {
      date: `${year}-${month}-${day}`,
      workout: workoutId,
      coach: calendarData.coach,
      client: calendarData.client,
    };

    const res = await fetchData(
      data,
      HTTP_METHODS.POST,
      ENDPOINTS.CALENDAR,
      CREDENTIALS.INCLUDE,
    );
    if (res.status === 200) {
      handleAlertData({
        severity: 'success',
        displayAlert: true,
        message: `Successfully added client's workout`,
        timeout: 2000,
      });
    } else {
      handleAlertData({
        severity: 'error',
        displayAlert: true,
        message: 'Something went wrong',
        timeout: 2000,
      });
    }
    return res;
  };

  return (
    <CardActions>
      <ExpandMore expand={expanded} onClick={handleExpandClick} color="primary">
        <DirectionsRunIcon />
      </ExpandMore>
      {!disableAddButton && (
        <IconButton
          sx={{ flex: 0 }}
          onClick={handleAddCalendarItem}
          size="large"
          color="primary"
        >
          <AddIcon />
        </IconButton>
      )}
    </CardActions>
  );
}
