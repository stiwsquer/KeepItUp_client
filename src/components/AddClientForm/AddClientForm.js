import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Alert, Button, TextField, Typography, Box } from '@mui/material';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';
import { useClientContext } from '../../Context/ClientContext';

export default function AddClientForm() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [, toggleClient] = useClientContext();

  const submit = async (values) => {
    const res = await fetchData(
      null,
      HTTP_METHODS.PATCH,
      ENDPOINTS.CLIENT,
      CREDENTIALS.INCLUDE,
      values.email,
    );
    console.log(res);

    if (res.status === 200) {
      setSuccess(true);
      setError(false);
      toggleClient();
    } else {
      setError(true);
      setSuccess(false);
    }
    return res;
  };

  const errorMessage = <Alert severity="error">Something went wrong</Alert>;
  const successMessage = (
    <Alert variant="outlined" severity="success">
      Successfully added client
    </Alert>
  );

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Must be a valid email')
          .max(255)
          .required('Email is required'),
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
              Add client to your list
            </Typography>
          </Box>
          {error && errorMessage}
          {success && successMessage}
          <TextField
            id="email"
            label="Email Address"
            name="email"
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            value={values.email}
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
