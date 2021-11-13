import {
  CardContent,
  Typography,
  Box,
  Card,
  CardHeader,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandCard from '../ExpandCard/ExpandCard';
import ExpandMore from '../ExpandMore/ExpandMore';
import WorkoutCard from '../WorkoutCard/WorkoutCard';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';

export default function CalendarCard({ id, workout, date }) {
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFetchWorkout = async () => {
    try {
      const res = await fetchData(
        null,
        HTTP_METHODS.GET,
        ENDPOINTS.WORKOUT_ID,
        CREDENTIALS.INCLUDE,
        workout.id,
      );
      setData(res.results);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleFetchDelete = async () => {
    try {
      const res = await fetchData(
        null,
        HTTP_METHODS.DELETE,
        ENDPOINTS.CALENDAR,
        CREDENTIALS.INCLUDE,
        id,
      );
      console.log(res);

      return res;
    } catch (err) {
      return console.error(err.message);
    }
  };

  useEffect(() => {
    handleFetchWorkout();
  }, []);

  return (
    <Card
      key={id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 100rem',
        margin: '1rem',
        border: `0.1rem solid rgba(86, 100, 210,1)`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <CardHeader sx={{ flex: 1 }} title={date} />
        <CardContent sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            {workout.title}
          </Typography>
        </CardContent>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          color="primary"
        >
          <AddIcon />
        </ExpandMore>
        <IconButton
          sx={{ flex: 0 }}
          onClick={handleFetchDelete}
          size="large"
          color="primary"
        >
          <DeleteIcon />
        </IconButton>
      </Box>
      <ExpandCard expanded={expanded}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {data.map((card) => (
            <>
              <WorkoutCard
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
                exercises={card.exercises}
                coach={card.coach}
                disableAddButton
              />
            </>
          ))}
        </Box>
      </ExpandCard>
    </Card>
  );
}
