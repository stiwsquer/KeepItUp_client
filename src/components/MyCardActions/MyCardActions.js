import { CardActions, Hidden, IconButton } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMore from '../ExpandMore/ExpandMore';
import { useCalendarContext } from '../../Context/CalendarContext';
import { useAlertContext } from '../../Context/AlertContext';

import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';
import formatDate from '../FormatDate/FormatDate';

export default function MyCardActions({
  expanded,
  handleExpandClick,
  handleDeleteClick,
  workoutId,
  disableAddButton,
  cardType,
}) {
  const [calendarData, handleCalendarData] = useCalendarContext();
  const [, handleAlertData] = useAlertContext();

  const handleAddCalendarItem = async () => {
    const formattedDate = formatDate(calendarData.date);
    handleCalendarData({ date: formattedDate, workout: workoutId });
    const data = {
      date: formattedDate,
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

  const expandMoreOptions = (
    <ExpandMore expand={expanded} onClick={handleExpandClick} color="primary">
      <ExpandMoreIcon />
    </ExpandMore>
  );
  return (
    <CardActions>
      {cardType === ENDPOINTS.CLIENT ? (
        expandMoreOptions
      ) : (
        <Hidden smDown>{expandMoreOptions}</Hidden>
      )}

      {cardType === ENDPOINTS.WORKOUT && !disableAddButton && (
        <IconButton
          sx={{ flex: 0 }}
          onClick={handleAddCalendarItem}
          size="small"
          color="primary"
        >
          <AddIcon />
        </IconButton>
      )}

      {cardType !== ENDPOINTS.WORKOUT && (
        <IconButton
          sx={{ flex: 0 }}
          onClick={handleDeleteClick}
          size="large"
          color="primary"
        >
          <DeleteIcon />
        </IconButton>
      )}
    </CardActions>
  );
}
