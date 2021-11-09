import React from 'react';
import { Box } from '@mui/material';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

export default function ExerciseCards({ exercises, boxShadowColor }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {exercises.map((card) => (
        <>
          <ExerciseCard
            boxShadowColor={boxShadowColor}
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
  );
}
