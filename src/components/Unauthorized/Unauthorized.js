import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function Unauthorized() {
  return (
    <div>
      <Box
        sx={{
          width: '100%',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="xs">
          <Typography variant="h1" color="initial">
            403 - You Shall Not Pass
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
