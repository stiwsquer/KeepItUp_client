import {
  CardContent,
  Typography,
  Box,
  Card,
  CardHeader,
  Hidden,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import ExpandCard from '../ExpandCard/ExpandCard';
import WorkoutCard from '../WorkoutCard/WorkoutCard';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
  ROLES,
} from '../../services/apiCalls';
import MyCardActions from '../MyCardActions/MyCardActions';
import { useUserContext } from '../../Context/UserContext';

export default function CalendarCard({
  id,
  workout,
  date,
  client,
  toggleDelete,
}) {
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [user] = useUserContext();
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
      toggleDelete();
      return res;
    } catch (err) {
      return console.error(err.message);
    }
  };

  useEffect(() => {
    handleFetchWorkout();
  }, []);

  const titleToDisplay = () => {
    if (user.role === ROLES.CLIENT) {
      return `${user.coach.firstName} ${user.coach.lastName}`;
    }
    return client ? `${client.firstName} ${client.lastName}` : date;
  };
  return (
    <Card
      key={id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 100rem',
        margin: '1rem 0.5rem',
        border: `0.1rem solid rgba(86, 100, 210,1)`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <CardHeader sx={{ flex: 1 }} title={titleToDisplay()} />
        <Hidden smDown>
          <CardContent sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              {workout.title}
            </Typography>
          </CardContent>
        </Hidden>
        <MyCardActions
          expand={expanded}
          handleExpandClick={handleExpandClick}
          handleDeleteClick={handleFetchDelete}
          cardType={ENDPOINTS.CALENDAR}
        />
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
                disableDeleteButton
              />
            </>
          ))}
        </Box>
      </ExpandCard>
    </Card>
  );
}
