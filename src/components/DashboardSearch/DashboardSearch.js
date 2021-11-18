import React, { useEffect, useMemo, useState } from 'react';
import { Box, Container } from '@mui/material';
import debounce from 'lodash.debounce';
import MyCards from '../MyCards/MyCards';
import SearchForm from '../SearchForm/SearchForm';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';
import MyPagination from '../MyPagination/MyPagination';
import PerPageSelect from '../PerPageSelect/PerPageSelect';
import { useExerciseCardContext } from '../../Context/ExerciseCardContext';
import DATA_TYPES from '../DataTypes';
import AddClient from '../AddClient/AddClient';
import { useFetchTogglerContext } from '../../Context/FetchTogglerContext';
import { useAlertContext } from '../../Context/AlertContext';

export default function DashboardSearch({ dashboardType, bigCard }) {
  const [searchedData, setSearchedData] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [nextPage, setNextPage] = useState(false);
  const [prevPage, setPrevPage] = useState(false);
  const perPageValues = [20, 50, 100, 200];
  const [, setBigCard] = useExerciseCardContext();
  const [fetch] = useFetchTogglerContext();
  const [alert] = useAlertContext();

  const handleFetchData = async () => {
    let endpoint;
    if (dashboardType === DATA_TYPES.EXERCISE) endpoint = ENDPOINTS.EXERCISE;
    if (dashboardType === DATA_TYPES.WORKOUT) endpoint = ENDPOINTS.WORKOUT;
    if (dashboardType === DATA_TYPES.CLIENT) endpoint = ENDPOINTS.CLIENT;
    try {
      const res = await fetchData(
        null,
        HTTP_METHODS.GET,
        endpoint,
        CREDENTIALS.INCLUDE,
        searchedValue,
        page,
        limit,
      );
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
    handleFetchData();
    console.log(searchedData);
  }, [searchedValue, page, limit, fetch]);

  useEffect(() => {
    setPage(1);
  }, [searchedValue]);

  const debouncedHandleChange = useMemo(() => debounce(handleChange, 300), []);

  useEffect(() => {
    setBigCard(bigCard);
    return () => {
      debouncedHandleChange.cancel();
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.default',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="xl">
          {alert}
          <Box sx={{ margin: '2rem 0', display: 'flex', alignItems: 'center' }}>
            <SearchForm handleChange={debouncedHandleChange} />
            {dashboardType === DATA_TYPES.CLIENT && (
              <AddClient dashboardType={DATA_TYPES.CLIENT} />
            )}
            {dashboardType === DATA_TYPES.EXERCISE && (
              <AddClient dashboardType={DATA_TYPES.EXERCISE} />
            )}
            <PerPageSelect
              limit={limit}
              handleLimitChange={handleLimitChange}
              values={perPageValues}
            />
          </Box>

          <MyCards cards={searchedData} dataType={dashboardType} />

          <MyPagination
            nextPage={nextPage}
            prevPage={prevPage}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            page={page}
          />
        </Container>
      </Box>
    </>
  );
}
