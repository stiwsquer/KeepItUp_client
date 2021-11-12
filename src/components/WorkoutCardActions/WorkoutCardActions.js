import { CardActions, IconButton } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ExpandMore from '../ExpandMore/ExpandMore';
import { useCalendarContext } from '../../Context/CalendarContext';

export default function WorkoutCardActions({ expanded, handleExpandClick }) {
  const [workoutId, , coachId, , clientId, , date] = useCalendarContext();

  const handleAddCalendarPosition = () => {
    console.log(workoutId);
    console.log(date);
    console.log(clientId);
    console.log(coachId);
  };

  return (
    <CardActions>
      <ExpandMore expand={expanded} onClick={handleExpandClick} color="primary">
        <DirectionsRunIcon />
      </ExpandMore>
      <IconButton
        sx={{ flex: 0 }}
        onClick={handleAddCalendarPosition}
        size="large"
        color="primary"
      >
        <AddIcon />
      </IconButton>
    </CardActions>
  );
}
