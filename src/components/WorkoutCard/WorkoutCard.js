import React, { useEffect, useState } from 'react';
import { CardContent, Typography, Collapse, Box } from '@mui/material';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import { useExerciseCardContext } from '../../Context/ExerciseCardContext';
import WorkoutCardActions from '../WorkoutCardActions/WorkoutCardActions';

export default function WorkoutCard({
  id,
  title,
  description,
  exercises,
  coach,
}) {
  const [expanded, setExpanded] = useState(false);
  const [, setBigCard] = useExerciseCardContext();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    setBigCard(false);
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
        <CardHeader sx={{ flex: 1 }} title={title} />
        <CardContent sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            {coach ? coach.email : 'Template'}
          </Typography>
        </CardContent>

        <WorkoutCardActions
          expanded={expanded}
          handleExpandClick={handleExpandClick}
          workoutId={id}
        />
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>{description}</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {exercises.map((card) => (
              <>
                <ExerciseCard
                  title={card.name}
                  url={card.url}
                  bodyPart={card.bodyPart}
                  equipment={card.equipment}
                  target={card.target}
                  key={card.id}
                  id={card.id}
                />
              </>
            ))}
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}
