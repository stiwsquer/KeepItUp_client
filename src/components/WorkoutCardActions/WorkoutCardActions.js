import { CardActions, IconButton } from '@mui/material';
import React, { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ExpandMore from '../ExpandMore/ExpandMore';
import { useCalendarContext } from '../../Context/CalendarContext';
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
}) {
  const [, setWorkoutId, coachId, , clientId, , date] = useCalendarContext();

  useEffect(() => {
    setWorkoutId(workoutId);
  }, []);

  const handleAddCalendarItem = async () => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = newDate.getUTCMonth() + 1;
    const day = newDate.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    const data = {
      date: formattedDate,
      coach: coachId,
      client: clientId,
      workout: workoutId,
    };
    console.log(data);
    const res = await fetchData(
      data,
      HTTP_METHODS.POST,
      ENDPOINTS.CALENDAR,
      CREDENTIALS.INCLUDE,
    );

    console.log(res);
  };

  return (
    <CardActions>
      <ExpandMore expand={expanded} onClick={handleExpandClick} color="primary">
        <DirectionsRunIcon />
      </ExpandMore>
      <IconButton
        sx={{ flex: 0 }}
        onClick={handleAddCalendarItem}
        size="large"
        color="primary"
      >
        <AddIcon />
      </IconButton>
    </CardActions>
  );
}
