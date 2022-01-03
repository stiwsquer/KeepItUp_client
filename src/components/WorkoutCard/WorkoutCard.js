import React, { useState } from 'react';
import {
  CardContent,
  Typography,
  Box,
  Card,
  CardHeader,
  Hidden,
} from '@mui/material';
import ExpandCard from '../ExpandCard/ExpandCard';
import WorkoutCardContent from '../WorkoutCardContent/WorkoutCardContent';
import MyCardActions from '../MyCardActions/MyCardActions';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';
import { useAlertContext } from '../../Context/AlertContext';
import { useFetchTogglerContext } from '../../Context/FetchTogglerContext';

export default function WorkoutCard({
  id,
  title,
  description,
  exercises,
  coach,
  disableAddButton,
  disableDeleteButton,
}) {
  const [expanded, setExpanded] = useState(false);
  const [, handleAlertData] = useAlertContext();
  const [, toggleFetch] = useFetchTogglerContext();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDeleteClick = async () => {
    const res = await fetchData(
      null,
      HTTP_METHODS.DELETE,
      ENDPOINTS.WORKOUT,
      CREDENTIALS.INCLUDE,
      id,
    );
    toggleFetch();
    if (res.status === 200) {
      handleAlertData({
        severity: 'success',
        displayAlert: true,
        message: 'Successfully deleted workout',
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
  };

  return (
    <Card
      key={id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 100rem',
        margin: '1rem 0rem',
        border: `0.1rem solid rgba(86, 100, 210,1)`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <CardHeader sx={{ flex: 1 }} title={title} />
        <Hidden smDown>
          <CardContent sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              {coach ? coach.email : 'Template'}
            </Typography>
          </CardContent>
        </Hidden>
        <MyCardActions
          expanded={expanded}
          handleExpandClick={handleExpandClick}
          workoutId={id}
          disableAddButton={disableAddButton}
          disableDeleteButton={disableDeleteButton}
          handleDeleteClick={handleDeleteClick}
          cardType={ENDPOINTS.WORKOUT}
        />
      </Box>
      <Hidden smDown>
        <ExpandCard expanded={expanded}>
          <WorkoutCardContent exercises={exercises} description={description} />
        </ExpandCard>
      </Hidden>
    </Card>
  );
}
