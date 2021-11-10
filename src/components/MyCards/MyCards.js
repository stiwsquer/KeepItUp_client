import React from 'react';
import { Box } from '@mui/material';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import DATA_TYPES from '../DataTypes';

export default function MyCards({ cards, boxShadowColor, dataType }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {dataType === DATA_TYPES.EXERCISE &&
        cards.map((card) => (
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
