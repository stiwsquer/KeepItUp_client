import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Container, TextField, Typography, Button } from '@mui/material';
import DashboardExercises from '../DashboardExercises/DashboardExercises';
import { useExerciseCardContext } from '../../Context/ExerciseCardContext';
import ExerciseCards from '../ExerciseCards/ExerciseCards';

export default function Workouts() {
  const [, , exercise] = useExerciseCardContext();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (exercise.delete) {
      const newExercises = exercises.filter((e) => e.id !== exercise.id);
      setExercises([...newExercises]);
    } else if (exercise.name) setExercises([...exercises, exercise]);
  }, [exercise]);

  const submit = async () => {};

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
          pt: 5,
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
                <Box
                  sx={{
                    mb: 3,
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
          <ExerciseCards boxShadowColor="red" exercises={exercises} />
        </Container>
      </Box>

      <DashboardExercises />
    </>
  );
}
