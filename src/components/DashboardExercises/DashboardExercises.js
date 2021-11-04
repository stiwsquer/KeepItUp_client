import React, { useEffect, useMemo, useState } from 'react';
import { Box, Container } from '@mui/material';
import debounce from 'lodash.debounce';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import SearchExerciseForm from '../SearchExerciseForm/SearchExerciseForm';

export default function DashboardExercises() {
  const [searchedData, setSearchedData] = useState([]);

  const handleChange = async (e) => {
    setSearchedData([]);
    console.log(e.target.value);
    try {
      let res = await fetch(
        `https://exercisedb.p.rapidapi.com/exercises/name/${e.target.value}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
            'x-rapidapi-key': `1270ff6e13msh311d81105679100p1768dejsn62268c858ade`,
          },
        },
      );
      res = await res.json();
      setSearchedData(res);
      console.log(res);
    } catch (err) {
      console.error(err.message);
    }
  };

  const debouncedHandleChange = useMemo(() => debounce(handleChange, 300), []);

  useEffect(
    () => () => {
      debouncedHandleChange.cancel();
    },
    [],
  );

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ margin: '2rem 0', display: 'flex', alignItems: 'center' }}>
          <SearchExerciseForm handleChange={debouncedHandleChange} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {searchedData.map((card) => (
            <>
              <ExerciseCard
                title={card.name}
                gifUrl={card.gifUrl}
                bodyPart={card.bodyPart}
                equipment={card.equipment}
                target={card.target}
                key={card.id}
                id={card.id}
              />
            </>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
