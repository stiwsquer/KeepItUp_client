import React from 'react';
import { Box, TextField, Button } from '@mui/material';

export default function MessengerForm({
  handleSubmit,
  newMessage,
  setNewMessage,
}) {
  return (
    <Box sx={{ mt: '5px', display: 'flex', justifyContent: 'space-between' }}>
      <TextField
        label="Start typing"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        multiline
        fullWidth
      />
      <Button
        onClick={handleSubmit}
        sx={{ mx: '5px' }}
        variant="contained"
        color="primary"
      >
        Send
      </Button>
    </Box>
  );
}
