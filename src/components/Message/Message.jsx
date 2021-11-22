import React from 'react';
import { format } from 'timeago.js';
import { Box, Typography } from '@mui/material';
import theme from '../../theme';

export default function Message({ message, owner }) {
  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column', mt: '20px' }}>
        <Box sx={{ alignSelf: owner ? 'flex-end' : 'flex-start' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography
              variant="body1"
              sx={{
                zIndex: 0,
                maxWidth: '600px',
                p: '10px',
                borderRadius: '20px',
                color: owner ? 'black' : theme.palette.primary.contrastText,
                backgroundColor: owner
                  ? theme.palette.background.default
                  : theme.palette.primary.main,
                display: 'flex',
              }}
            >
              {message.content}
            </Typography>
          </Box>
          <Typography
            sx={{ display: 'inline-block', mt: 1 }}
            variant="caption"
            color="initial"
          >
            {format(message.createdAt)}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
