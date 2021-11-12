import React, { useState, useEffect, useMemo } from 'react';
import { CardContent, Collapse, Box } from '@mui/material';
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

export default function AddWorkoutToClient({ expanded }) {
  const [searchedData, setSearchedData] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');

  const handleFetchData = async () => {
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
    handleFetchData();
    console.log(searchedData);
  }, [searchedValue]);

  useEffect(
    () => () => {
      debouncedHandleChange.cancel();
    },
    [],
  );
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Box sx={{ display: 'flex' }}>
          <SearchForm handleChange={debouncedHandleChange} />
          <MyDatePicker />
        </Box>
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
      </CardContent>
    </Collapse>
  );
}
