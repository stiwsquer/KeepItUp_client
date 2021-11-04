import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link as RouterLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useHistory } from 'react-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Checkbox,
  Link,
  FormHelperText,
  // Select,
  // MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
} from '@mui/material';
import { fetchRegister } from '../../services/apiCalls';

export default function Register() {
  const history = useHistory();
  const [error, setError] = useState(false);

  const submit = async (values) => {
    let res = await fetchRegister(values);
    console.log(res);
    res = res ? history.push('/login') : setError(true);
    return res;
  };

  const errorMessage = (
    <Alert severity="error">User with that email already exists</Alert>
  );
  return (
    <>
      <Helmet>
        <title>Register | KeepItUp</title>
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
              firstName: '',
              lastName: '',
              password: '',
              policy: false,
              userType: '',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              firstName: Yup.string()
                .max(255)
                .required('First name is required'),
              lastName: Yup.string().max(255).required('Last name is required'),
              password: Yup.string().max(255).required('Password is required'),
              policy: Yup.boolean().oneOf([true], 'This field must be checked'),
              userType: Yup.string().required('User type is required'),
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
                    Create new account
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Use your email to create new account
                  </Typography>
                </Box>
                {error && errorMessage}
                <TextField
                  id="firstName"
                  label="First name"
                  name="firstName"
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="lastName"
                  label="Last name"
                  name="lastName"
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  margin="normal"
                />
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
                <TextField
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  margin="normal"
                />

                <RadioGroup
                  id="userType"
                  value={values.userType}
                  onChange={handleChange}
                  row
                  aria-label="userType"
                  name="userType"
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
                {Boolean(touched.userType && errors.userType) && (
                  <FormHelperText error>{errors.userType}</FormHelperText>
                )}
                <Box sx={{ ml: -1, alignItems: 'center', display: 'flex' }}>
                  <Checkbox
                    id="policy"
                    name="policy"
                    label
                    onChange={handleChange}
                    checked={values.policy}
                  />
                  <Typography variant="body1" color="textSecondary">
                    I have read the{' '}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="/"
                      underline="always"
                      variant="h6"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>{errors.policy}</FormHelperText>
                )}
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
                  Sign up now
                </Button>
                <Typography variant="body1" color="textSecondary">
                  Have an account?{' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="h6"
                    underline="hover"
                  >
                    Sign in
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
