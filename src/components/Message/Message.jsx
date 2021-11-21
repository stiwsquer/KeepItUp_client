import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import theme from '../../theme';

export default function Message({ message, owner }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mt: '20px' }}>
      <Box sx={{ alignSelf: owner ? 'flex-end' : 'flex-start' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Avatar
            sx={{ width: '32px', height: '32px', mr: -1, mt: -1, zIndex: 0 }}
          >
            Z
          </Avatar>
          <Typography
            variant="body1"
            // color={owner ? 'textPrimary' : 'textSecondary'}
            sx={{
              zIndex: 0,
              maxWidth: '50vw',
              p: '10px',
              borderRadius: '20px',
              color: owner ? 'black' : theme.palette.primary.contrastText,
              backgroundColor: owner
                ? theme.palette.background.default
                : theme.palette.primary.main,
              display: 'flex',
            }}
          >
            {message.text}
          </Typography>
        </Box>
        <Typography
          sx={{ display: 'inline-block', mt: 1 }}
          variant="caption"
          color="initial"
        >
          {message.createdAt}
        </Typography>
      </Box>
    </Box>
  );
}
