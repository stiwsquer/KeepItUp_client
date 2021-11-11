import React from 'react';
import { Box } from '@mui/material';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import DATA_TYPES from '../DataTypes';
import ClientCard from '../ClientCard/ClientCard';

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

      {dataType === DATA_TYPES.CLIENT &&
        cards.map((card) => (
          <>
            <ClientCard
              email={card.email}
              firstName={card.firstName}
              lastName={card.lastName}
              key={card.id}
              id={card.id}
            />
          </>
        ))}
    </Box>
  );
}
