import React from 'react';
import {
  Hidden,
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Typography,
  // Link,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import StorageIcon from '@mui/icons-material/Storage';
import { useHistory } from 'react-router-dom';

export default function DashboardSidebar({
  onDashboardSidebarClose,
  openSidebar,
}) {
  const history = useHistory();
  function redirect(text) {
    switch (text) {
      case 'Calender':
        history.push('/app/calender');
        break;
      case 'Clients':
        history.push('/app/clients');
        break;
      case 'Chat':
        history.push('/app/chat');
        break;
      case 'Exercises':
        history.push('/app/exercises');
        break;
      default:
        history.push('/app/calender');
    }
  }

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
            <ListItemButton
              onClick={() => {
                redirect(text);
              }}
              key={text}
            >
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
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  );
  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={openSidebar}
          onClose={onDashboardSidebarClose}
          sx={{ zIndex: '0' }}
        >
          {list}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer variant="permanent" anchor="left" open sx={{ zIndex: '0' }}>
          {list}
        </Drawer>
      </Hidden>
    </>
  );
}
