import React from 'react';
import { Avatar, Card, CardHeader } from '@mui/material';
import theme from '../../theme/index';

export default function Conversation() {
  return (
    <Card
      sx={{
        // m: '10px 0px',
        border: 'none',
        boxShadow: 'none',
        cursor: 'pointer',
        bgcolor: theme.palette.background.paper,
        ':hover': {
          bgcolor: 'lightgray',
        },
      }}
    >
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: 'rgba(86, 100, 210,1)' }}>K</Avatar>}
        sx={{ flex: 1 }}
        title="John Doe"
      />
    </Card>
  );
}
