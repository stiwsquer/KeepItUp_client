import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Typography, Box } from '@mui/material';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';
import { useFetchTogglerContext } from '../../Context/FetchTogglerContext';
import { useAlertContext } from '../../Context/AlertContext';

export default function AddExerciseForm() {
  const [alert, handleAlertData] = useAlertContext();
  const [, toggleFetch] = useFetchTogglerContext();

  const submit = async (values) => {
    const res = await fetchData(
      values,
      HTTP_METHODS.POST,
      ENDPOINTS.EXERCISE,
      CREDENTIALS.INCLUDE,
    );
    console.log(res);

    if (res.status === 200) {
      handleAlertData({
        severity: 'success',
        displayAlert: true,
        message: 'Successfully added client',
        timeout: 2000,
      });
      toggleFetch();
    } else {
      handleAlertData({
        severity: 'error',
        displayAlert: true,
        message: 'Something went wrong',
        timeout: 2000,
      });
    }
    return res;
  };

  return (
    <Formik
      initialValues={{
        name: '',
        equipment: '',
        bodyPart: '',
        target: '',
        url: '',
        videoUrl: '',
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Name is required'),
        equipment: Yup.string().required('Equipment is required'),
        bodyPart: Yup.string().required('Body part is required'),
        target: Yup.string().required('Target is required'),
        url: Yup.string().required('Url is required'),
        videoUrl: Yup.string().required('Url is required'),
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
            }}
          >
            <Typography variant="h2" color="textPrimary">
              Add new exercise
            </Typography>
          </Box>
          {alert}
          <TextField
            id="name"
            label="Name"
            name="name"
            error={Boolean(touched.name && errors.name)}
            helperText={touched.name && errors.name}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            margin="normal"
          />
          <TextField
            id="equipment"
            label="Equipment"
            name="equipment"
            error={Boolean(touched.equipment && errors.equipment)}
            helperText={touched.equipment && errors.equipment}
            value={values.equipment}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            margin="normal"
          />

          <TextField
            id="bodyPart"
            label="Body part"
            name="bodyPart"
            error={Boolean(touched.bodyPart && errors.bodyPart)}
            helperText={touched.bodyPart && errors.bodyPart}
            value={values.bodyPart}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            margin="normal"
          />

          <TextField
            id="target"
            label="Target"
            name="target"
            error={Boolean(touched.target && errors.target)}
            helperText={touched.target && errors.target}
            value={values.target}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            margin="normal"
          />
          <TextField
            id="url"
            label="Url to a picture"
            name="url"
            error={Boolean(touched.url && errors.url)}
            helperText={touched.url && errors.url}
            value={values.url}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            margin="normal"
          />
          <TextField
            id="videoUrl"
            label="Url to a video"
            name="videoUrl"
            error={Boolean(touched.videoUrl && errors.videoUrl)}
            helperText={touched.videoUrl && errors.videoUrl}
            value={values.videoUrl}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            margin="normal"
          />

          <Button
            color="primary"
            disabled={isSubmitting}
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              my: 2,
            }}
          >
            Add
          </Button>
        </form>
      )}
    </Formik>
  );
}
