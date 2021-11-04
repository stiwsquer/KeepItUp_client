import React, { useEffect, useMemo, useState } from 'react';
import { Box, Container } from '@mui/material';
import debounce from 'lodash.debounce';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import SearchExerciseForm from '../SearchExerciseForm/SearchExerciseForm';
import {
  // fetchAllExercises,
  fetchExercisesByName,
} from '../../services/apiCalls';

export default function DashboardExercises() {
  const [searchedData, setSearchedData] = useState([]);

  // useEffect(async () => {
  //   try {
  //     const res = await fetchAllExercises();
  //     setSearchedData(res);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // }, []);

  const handleChange = async (e) => {
    setSearchedData([]);
    if (e.target.value === '') return;
    try {
      const res = await fetchExercisesByName(e.target.value);
      setSearchedData(res);
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
      </Container>
    </Box>
  );
}
