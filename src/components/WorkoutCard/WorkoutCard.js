import React, { useState } from 'react';
import { CardContent, Typography, Box, Card, CardHeader } from '@mui/material';
import ExpandCard from '../ExpandCard/ExpandCard';
import WorkoutCardContent from '../WorkoutCardContent/WorkoutCardContent';
import MyCardActions from '../MyCardActions/MyCardActions';
import { ENDPOINTS } from '../../services/apiCalls';

export default function WorkoutCard({
  id,
  title,
  description,
  exercises,
  coach,
  disableAddButton,
}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        <CardHeader sx={{ flex: 1 }} title={title} />
        <CardContent sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            {coach ? coach.email : 'Template'}
          </Typography>
        </CardContent>

        <MyCardActions
          expanded={expanded}
          handleExpandClick={handleExpandClick}
          workoutId={id}
          disableAddButton={disableAddButton}
          cardType={ENDPOINTS.WORKOUT}
        />
      </Box>
      <ExpandCard expanded={expanded}>
        <WorkoutCardContent exercises={exercises} description={description} />
      </ExpandCard>
    </Card>
  );
}
