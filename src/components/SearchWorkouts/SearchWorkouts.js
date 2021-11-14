import React, { useState, useEffect, useMemo } from 'react';
import { Box, Button, Hidden } from '@mui/material';
import debounce from 'lodash.debounce';
import SearchForm from '../SearchForm/SearchForm';
import WorkoutCard from '../WorkoutCard/WorkoutCard';

import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';
import MyDatePicker from '../MyDatePicker/MyDatePicker';
import ExpandCard from '../ExpandCard/ExpandCard';

export default function SearchWorkouts() {
  const [searchedData, setSearchedData] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFetchWorkoutsData = async () => {
    try {
      const res = await fetchData(
        null,
        HTTP_METHODS.GET,
        ENDPOINTS.WORKOUT,
        CREDENTIALS.INCLUDE,
        searchedValue,
      );
      console.log(res);
      console.log(searchedData);
      console.log(searchedValue);
      setSearchedData(res.results);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleChange = async (e) => {
    setSearchedValue(e.target.value);
  };

  const debouncedHandleChange = useMemo(() => debounce(handleChange, 300), []);

  useEffect(() => {
    handleFetchWorkoutsData();
    console.log(searchedData);
  }, [searchedValue]);

  useEffect(
    () => () => {
      debouncedHandleChange.cancel();
    },
    [],
  );
  return (
    <>
      <Button
        sx={{ mb: 1 }}
        variant="contained"
        color="primary"
        onClick={handleExpandClick}
        fullWidth
      >
        Add Workout
      </Button>
      <ExpandCard expanded={expanded}>
        <Hidden smDown>
          <Box sx={{ display: 'flex' }}>
            <SearchForm handleChange={debouncedHandleChange} />
            <MyDatePicker />
          </Box>
        </Hidden>
        <Hidden smUp>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <SearchForm handleChange={debouncedHandleChange} />
            <MyDatePicker />
          </Box>
        </Hidden>
        {searchedData.map((card) => (
          <>
            <WorkoutCard
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              exercises={card.exercises}
              coach={card.coach}
            />
          </>
        ))}
      </ExpandCard>
    </>
  );
}
