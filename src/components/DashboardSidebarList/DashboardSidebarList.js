import { Avatar, Divider, List, Typography, Box } from '@mui/material';
import React from 'react';
import { useDashboardSidebarContext } from '../../Context/DashboardSidebarContext';
import { useUserContext } from '../../Context/UserContext';
import DashboardSidebarListItems from '../../DashboardSidebarListItems/DashboardSidebarListItems';
import { ROLES } from '../../services/apiCalls';

export default function DashboardSidebarList() {
  const [, onDashboardSidebarClose] = useDashboardSidebarContext();
  const [user] = useUserContext();

  return (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={onDashboardSidebarClose}
      onKeyDown={onDashboardSidebarClose}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <Avatar sx={{ width: 64, height: 64 }}>
          {user.firstName ? user.firstName[0] : ''}
        </Avatar>
        <Typography
          variant="h4"
          color="textPrimary"
          sx={{ marginTop: 1, marginBottom: 1 }}
        >
          {user.firstName ? user.firstName : ''}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginBottom: 1 }}
        >
          {user.role ? user.role : ''}
        </Typography>
      </Box>
      <Divider />
      <Box>
        <List>
          {['Calendar', 'Clients', 'Chat', 'Exercises', 'Create Workout'].map(
            (text, index) => {
              if (
                !(
                  user.role === ROLES.CLIENT &&
                  ['Clients', 'Create Workout'].includes(text)
                )
              ) {
                return <DashboardSidebarListItems text={text} index={index} />;
              }
              return null;
            },
          )}
        </List>
      </Box>
    </Box>
  );
}
