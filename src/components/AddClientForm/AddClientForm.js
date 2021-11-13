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
import { useClientContext } from '../../Context/ClientContext';
import { useAlertContext } from '../../Context/AlertContext';

export default function AddClientForm() {
  const [alert, handleAlertData] = useAlertContext();
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
      handleAlertData({
        severity: 'success',
        displayAlert: true,
        message: 'Successfully added client',
        timeout: 2000,
      });
      toggleClient();
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
          {alert}
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
