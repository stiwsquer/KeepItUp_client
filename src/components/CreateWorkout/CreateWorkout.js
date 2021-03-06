import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Container, TextField, Typography, Button } from '@mui/material';
import DashboardSearch from '../DashboardSearch/DashboardSearch';
import { useExerciseCardContext } from '../../Context/ExerciseCardContext';
import MyCards from '../MyCards/MyCards';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';
import DATA_TYPES from '../DataTypes';
import { useAlertContext } from '../../Context/AlertContext';

export default function Workouts() {
  const [, , exercise] = useExerciseCardContext();
  const [exercises, setExercises] = useState([]);
  const history = useHistory();
  const [alert, handleAlertData] = useAlertContext();

  useEffect(() => {
    if (exercise.delete) {
      const newExercises = exercises.filter((e) => e.id !== exercise.id);
      setExercises([...newExercises]);
    } else if (exercise.name && exercise.id) {
      let first = true;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < exercises.length; i++) {
        if (exercises[i].id === exercise.id) {
          first = false;
          break;
        }
      }
      if (first) setExercises([...exercises, exercise]);
    }
  }, [exercise]);

  const submit = async (values) => {
    const data = {
      description: values.description,
      title: values.title,
      exercises,
    };
    const res = await fetchData(
      data,
      HTTP_METHODS.POST,
      ENDPOINTS.WORKOUT,
      CREDENTIALS.INCLUDE,
    );

    if (res.status === 200) {
      handleAlertData({
        severity: 'success',
        displayAlert: true,
        message: 'Successfully created workout',
        timeout: 2000,
      });
      setTimeout(() => {
        history.push('/app/clients');
      }, 2000);
    } else {
      handleAlertData({
        severity: 'error',
        displayAlert: true,
        message: 'Unable to create a workout',
        timeout: null,
      });
    }
    return res;
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '40%',
          width: '100%',
          justifyContent: 'center',
          pt: 3,
        }}
      >
        <Container maxWidth="xl">
          <Formik
            initialValues={{
              title: '',
              description: '',
            }}
            validationSchema={Yup.object().shape({
              title: Yup.string().max(255).required('Title is required'),
              description: Yup.string().max(1000),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              submit(values);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                {alert}
                <Box
                  sx={{
                    my: 3,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="h2" color="textPrimary">
                    Create new workout
                  </Typography>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                    size="large"
                  >
                    Save
                  </Button>
                </Box>
                <TextField
                  id="title"
                  label="Title"
                  name="title"
                  error={Boolean(touched.title && errors.title)}
                  helperText={touched.title && errors.title}
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="description"
                  label="Description"
                  name="description"
                  error={Boolean(touched.description && errors.description)}
                  helperText={touched.description && errors.description}
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  margin="normal"
                  multiline
                  minRows={3}
                />
              </form>
            )}
          </Formik>
          <MyCards
            boxShadowColor="rgba(255, 0, 0, 0.30)"
            cards={exercises}
            dataType={DATA_TYPES.EXERCISE}
          />
        </Container>
      </Box>

      <DashboardSearch dashboardType={DATA_TYPES.EXERCISE} bigCard={false} />
    </>
  );
}
