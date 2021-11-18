import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import StorageIcon from '@mui/icons-material/Storage';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export default function DashboardSidebarListItems({ text, index }) {
  const history = useHistory();

  function redirect(textValue) {
    switch (textValue) {
      case 'Calendar':
        history.push('/app/calendar');
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
      case 'Create Workout':
        history.push('/app/create-workout');
        break;
      case 'Workouts':
        history.push('/app/workouts');
        break;
      default:
        history.push('/app/calendar');
    }
  }

  return (
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
            case 4:
              return <StorageIcon />;
            case 5:
              return <FitnessCenterIcon />;
            default:
              return <PersonIcon />;
          }
        })()}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
}
