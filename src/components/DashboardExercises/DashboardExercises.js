import React, { useEffect, useMemo, useState } from 'react';
import { Box, Container } from '@mui/material';
// import Pagination from '@mui/material/Pagination';
import debounce from 'lodash.debounce';
import ExerciseCards from '../ExerciseCards/ExerciseCards';
import SearchExerciseForm from '../SearchExerciseForm/SearchExerciseForm';
import { fetchExercises } from '../../services/apiCalls';
import MyPagination from '../MyPagination/MyPagination';
import PerPageSelect from '../PerPageSelect/PerPageSelect';

export default function DashboardExercises() {
  const [searchedData, setSearchedData] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [nextPage, setNextPage] = useState(false);
  const [prevPage, setPrevPage] = useState(false);
  const perPageValues = [20, 50, 100, 200];

  const fetchData = async () => {
    try {
      const res = await fetchExercises(searchedValue, page, limit);
      console.log(res);
      if (res.next) setNextPage(true);
      else setNextPage(false);
      if (res.previous) setPrevPage(true);
      else setPrevPage(false);
      setSearchedData(res.results);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
  };
  const handleNextPage = () => {
    const val = page + 1;
    setPage(val);
  };
  const handlePrevPage = () => {
    const val = page - 1;
    setPage(val);
  };

  const handleChange = async (e) => {
    setSearchedValue(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [searchedValue, page, limit]);

  useEffect(() => {
    setPage(1);
  }, [searchedValue]);

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
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ margin: '2rem 0', display: 'flex', alignItems: 'center' }}>
          <SearchExerciseForm handleChange={debouncedHandleChange} />
          <PerPageSelect
            limit={limit}
            handleLimitChange={handleLimitChange}
            values={perPageValues}
          />
        </Box>
        <ExerciseCards exercises={searchedData} />
        <MyPagination
          nextPage={nextPage}
          prevPage={prevPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          page={page}
        />
      </Container>
    </Box>
  );
}
