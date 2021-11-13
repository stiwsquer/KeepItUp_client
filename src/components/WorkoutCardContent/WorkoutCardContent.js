import React, { useEffect } from 'react';
import { Typography, Box, ToggleButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import { useExerciseCardContext } from '../../Context/ExerciseCardContext';

export default function WorkoutCardContent({ description, exercises }) {
  const [bigCard, setBigCard] = useExerciseCardContext();

  const handleClick = () => {
    setBigCard((prev) => !prev);
  };

  useEffect(() => {
    setBigCard(false);
  }, []);

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ flex: 10 }} paragraph>
          Description:
        </Typography>
        <ToggleButton onClick={handleClick} color="primary">
          {bigCard ? <ZoomOutIcon /> : <ZoomInIcon />}
        </ToggleButton>
      </Box>

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
    </div>
  );
}
