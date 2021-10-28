import React from 'react';
import {
  Hidden,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Typography,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import StorageIcon from '@mui/icons-material/Storage';

export default function DashboardSidebar({
  onDashboardSidebarClose,
  openSidebar,
}) {
  const list = (
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
        <Avatar sx={{ width: 64, height: 64 }}>H</Avatar>
        <Typography
          variant="h4"
          color="textPrimary"
          sx={{ marginTop: 1, marginBottom: 1 }}
        >
          John Doe
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginBottom: 1 }}
        >
          Trainer
        </Typography>
      </Box>
      <Divider />
      <Box>
        <List>
          {['Calender', 'Clients', 'Chat', 'Exercises'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {(() => {
                  switch (index) {
                    case 0:
                      return <CalendarTodayIcon />;
                    case 1:
                      return <PersonIcon />;
                    case 2:
                      return <ChatIcon />;
                    case 3:
                      return <StorageIcon />;
                    default:
                      return <PersonIcon />;
                  }
                })()}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
  return (
    <>
      <Hidden mdUp>
        <Drawer
          anchor="left"
          open={openSidebar}
          onClose={onDashboardSidebarClose}
          sx={{ zIndex: '0' }}
        >
          {list}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          variant="permanent"
          anchor="left"
          open={true}
          sx={{ zIndex: '0' }}
        >
          {list}
        </Drawer>
      </Hidden>
    </>
  );
}
