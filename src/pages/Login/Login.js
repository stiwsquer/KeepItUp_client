import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  FormHelperText,
  Link,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';
import { useAlertContext } from '../../Context/AlertContext';
import { useUserContext } from '../../Context/UserContext';

export default function Login() {
  const history = useHistory();
  const [alert, handleAlertData] = useAlertContext();
  const [, setUser] = useUserContext();

  const submit = async (values) => {
    let res = await fetchData(
      values,
      HTTP_METHODS.POST,
      ENDPOINTS.LOGIN,
      CREDENTIALS.INCLUDE,
    );
    if (res.status === 200) {
      handleAlertData({
        severity: 'success',
        displayAlert: true,
        message: 'Successfully logged in',
        timeout: 1000,
      });
      res = await res.json();
      setUser(() => res);
      history.push('/app/calendar');
    } else {
      handleAlertData({
        severity: 'error',
        displayAlert: true,
        message: 'Something went wrong',
        timeout: 3000,
      });
    }

    return res;
  };

  return (
    <>
      <Helmet>
        <title>Login | KeepItUp</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              password: '',
              role: '',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              password: Yup.string().max(255).required('Password is required'),
              role: Yup.string().required('User type is required'),
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
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h2">
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                {alert}
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Adress"
                  margin="normal"
                  name="email"
                  type="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  variant="outlined"
                />

                <RadioGroup
                  id="role"
                  value={values.role}
                  onChange={handleChange}
                  row
                  aria-label="role"
                  name="role"
                  sx={{ marginLeft: 1 }}
                >
                  <FormControlLabel
                    value="coach"
                    control={<Radio />}
                    label="Coach"
                  />
                  <FormControlLabel
                    value="client"
                    control={<Radio />}
                    label="Client"
                  />
                </RadioGroup>
                {Boolean(touched.role && errors.role) && (
                  <FormHelperText error>{errors.role}</FormHelperText>
                )}

                <Box sx={{ my: 2 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    fullWidth
                    variant="contained"
                    size="large"
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Don&apos;t have an account?
                  <Link
                    component={RouterLink}
                    to="/register"
                    underline="hover"
                    variant="h6"
                    sx={{
                      px: 1,
                    }}
                  >
                    Sign up
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
}
