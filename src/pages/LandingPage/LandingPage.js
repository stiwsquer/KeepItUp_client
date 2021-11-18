import React from 'react';
import Helmet from 'react-helmet';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Button, Container, Grid, Link } from '@mui/material';
import background from '../../static/landingPageBackground.jpg';
import backgroundVideo from '../../static/bgvideo.mp4';

export default function LandingPage() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%,-50%)',
          zIndex: '0',
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Helmet>
        <title>Landing Page | KeepItUp</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          objectFit: 'cover',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="xs">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Link component={RouterLink} to="/login" underline="none">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{
                    height: '200px',
                  }}
                >
                  Log In
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} md={6}>
              <Link component={RouterLink} to="/register" underline="none">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{
                    height: '200px',
                  }}
                >
                  Register
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
