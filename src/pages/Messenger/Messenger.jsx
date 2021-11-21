import React from 'react';
import { Box, Input, TextField, Button } from '@mui/material';
import Conversation from '../../components/Conversation/Conversation';
import theme from '../../theme/index';
import Message from '../../components/Message/Message';

export default function Messenger() {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Box sx={{ flex: 3 }}>
        <Box sx={{ padding: '10px', height: '100%' }}>
          <Input
            placeholder="Search for clients"
            fullWidth
            sx={{ padding: '10px 0px', mb: '10px' }}
          />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
        </Box>
      </Box>
      <Box sx={{ flex: 7 }}>
        <Box
          sx={{
            padding: '10px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <Box sx={{ height: '100%', overflowY: 'scroll', pr: '10px' }}>
            <Message
              message={{
                text: ' Lorem ipsum dolors ie blanditiis inventore autem expedita ab dolorum, nesciunt modi?',
                createdAt: '2 hours ago',
              }}
              owner
            />
            <Message
              message={{
                text: ' Lorem ipsum doles ducimus iure sndae sint sit quisquam labore blanditiis inventore autem expedita ab dolorum, nesciunt modi?',
                createdAt: '2 hours ago',
              }}
            />
            <Message
              message={{
                text: ' Lorem ipsum dolors ie blanditiis inventore autem expedita ab dolorum, nesciunt modi?',
                createdAt: '2 hours ago',
              }}
              owner
            />
            <Message
              message={{
                text: ' Lorem ipsum doles ducimus iure sndae sint sit quisquam labore blanditiis inventore autem expedita ab dolorum, nesciunt modi?',
                createdAt: '2 hours ago',
              }}
            />
            <Message
              message={{
                text: ' Lorem ipsum dolors ie blanditiis inventore autem expedita ab dolorum, nesciunt modi?',
                createdAt: '2 hours ago',
              }}
              owner
            />
            <Message
              message={{
                text: ' Lorem ipsum doles ducimus iure sndae sint sit quisquam labore blanditiis inventore autem expedita ab dolorum, nesciunt modi?',
                createdAt: '2 hours ago',
              }}
            />
            <Message
              message={{
                text: ' Lorem ipsum dolors ie blanditiis inventore autem expedita ab dolorum, nesciunt modi?',
                createdAt: '2 hours ago',
              }}
              owner
            />
            <Message
              message={{
                text: ' Lorem ipsum doles ducimus iure sndae sint sit quisquam labore blanditiis inventore autem expedita ab dolorum, nesciunt modi?',
                createdAt: '2 hours ago',
              }}
            />
            <Message
              message={{
                text: ' Lorem ipsum dolors ie blanditiis inventore autem expedita ab dolorum, nesciunt modi?',
                createdAt: '2 hours ago',
              }}
              owner
            />
            <Message
              message={{
                text: ' Lorem ipsum doles ducimus iure sndae sint sit quisquam labore blanditiis inventore autem expedita ab dolorum, nesciunt modi?',
                createdAt: '2 hours ago',
              }}
            />
            <Message
              message={{
                text: ' Lorem ipsum dolors ie blanditiis inventore autem expedita ab dolorum, nesciunt modi?',
                createdAt: '2 hours ago',
              }}
              owner
            />
            <Message
              message={{
                text: ' Lorem ipsum doles ducimus iure sndae sint sit quisquam labore blanditiis inventore autem expedita ab dolorum, nesciunt modi?',
                createdAt: '2 hours ago',
              }}
            />
          </Box>
          <Box
            sx={{ mt: '5px', display: 'flex', justifyContent: 'space-between' }}
          >
            <TextField
              //   id=""
              label="Start typing"
              //   value={}
              //   onChange={}
              multiline
              fullWidth
            />
            <Button sx={{ mx: '5px' }} variant="contained" color="primary">
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
