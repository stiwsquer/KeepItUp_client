import React from 'react';
import { Box, Typography } from '@mui/material';

export default function OpenConversationMessage() {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgba(0,0,0,0.2)',
      }}
    >
      <Typography variant="h3">Open a conversation to start a chat</Typography>
    </Box>
  );
}
