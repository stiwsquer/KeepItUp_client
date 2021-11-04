import React, { useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Alert,
  Box,
  Button,
  Container,
  FormControlLabel,
  FormHelperText,
  // Grid,
  Link,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { fetchLogin } from '../../services/apiCalls';
// import FacebookIcon from '../../icons/Facebook';
// import GoogleIcon from '../../icons/Google';

export default function Login() {
  const history = useHistory();
  const [error, setError] = useState(false);

  const submit = async (values) => {
    let res = await fetchLogin(values);
    console.log(res);
    res = res ? history.push('/app') : setError(true);
    return res;
  };

  const errorMessage = (
    <Alert severity="error">User with that credentials does not exist</Alert>
  );

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
              userType: '',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              password: Yup.string().max(255).required('Password is required'),
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

                {error && errorMessage}

                {/* <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Button
                      color="primary"
                      fullWidth
                      variant="contained"
                      size="large"
                      startIcon={<FacebookIcon />}
                    >
                      Login with Facebook
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      color="primary"
                      fullWidth
                      variant="contained"
                      size="large"
                      startIcon={<GoogleIcon />}
                    >
                      Login with Google
                    </Button>
                  </Grid>
                </Grid> */}
                {/* <Box
                  sx={{
                    mb: 1,
                    mt: 3,
                  }}
                >
                  <Typography
                    align="center"
                    variant="body1"
                    color="textSecondary"
                  >
                    or login with email address
                  </Typography>
                </Box> */}
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

                <Box sx={{ my: 2 }}>
                  <Button
                    type="submit"
                    disable={isSubmitting}
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
